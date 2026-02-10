---
name: n8n-expert
description: Comprehensive n8n workflow builder and MCP tools expert. Use when building n8n workflows, searching for nodes, validating configurations, accessing templates, designing workflow architecture, or troubleshooting n8n issues. Covers the 5 core patterns (webhook processing, HTTP API integration, database operations, AI agent workflows, scheduled tasks), MCP tool selection, nodeType formats, node configuration, validation profiles, expression syntax, and workflow best practices.
---

# n8n Expert

Master guide for building n8n workflows using MCP tools and proven architectural patterns.

---

## Quick Reference

### Most Used MCP Tools

| Tool | Use When | Success Rate |
|------|----------|--------------|
| `search_nodes` | Finding nodes by keyword | 99.9% |
| `get_node_essentials` | Understanding node operations | 91.7% |
| `validate_node_operation` | Checking configurations | Varies |
| `n8n_create_workflow` | Creating workflows | 96.8% |
| `n8n_update_partial_workflow` | Editing workflows (MOST USED) | 99.0% |
| `validate_workflow` | Checking complete workflow | 95.5% |

### Pattern Selection Quick Guide

| Need | Pattern | Example |
|------|---------|---------|
| Receive external data | Webhook Processing | Stripe payment → Update DB → Send confirmation |
| Fetch from APIs | HTTP API Integration | Fetch GitHub issues → Transform → Create Jira tickets |
| Database sync/ETL | Database Operations | Read Postgres → Transform → Write to MySQL |
| Conversational AI | AI Agent Workflow | Chat with AI that can search docs, query DB, send emails |
| Recurring tasks | Scheduled Tasks | Daily: Fetch analytics → Generate report → Email team |

---

## The 5 Core Patterns

### 1. Webhook Processing (Most Common - 35% of workflows)

**Pattern**: Webhook → Validate → Transform → Respond/Notify

**Use when**: Receiving data from external systems, building integrations (Slack commands, form submissions, payment webhooks)

```
Webhook (path: "form-submit", POST)
  → Set (map form fields)
  → Slack (post to #notifications)
```

**Critical**: Webhook data is nested under `$json.body`
```javascript
❌ {{$json.email}}
✅ {{$json.body.email}}
```

### 2. HTTP API Integration (45% use HTTP Request)

**Pattern**: Trigger → HTTP Request → Transform → Action → Error Handler

**Use when**: Fetching data from external APIs, synchronizing with third-party services, building data pipelines

```
Manual Trigger
  → HTTP Request (GET /api/users)
  → Split In Batches (process 100 at a time)
  → Set (transform user data)
  → Postgres (upsert users)
```

### 3. Database Operations (28% include database writes)

**Pattern**: Schedule → Query → Transform → Write → Verify

**Use when**: Syncing between databases, running scheduled queries, ETL workflows

```
Schedule (every 15 minutes)
  → Postgres (query new records)
  → IF (check if records exist)
  → MySQL (insert records)
  → Postgres (update sync timestamp)
```

### 4. AI Agent Workflow (Growing in usage)

**Pattern**: Trigger → AI Agent (Model + Tools + Memory) → Output

**Use when**: Building conversational AI, need AI with tool access, multi-step reasoning

```
Webhook (receive chat message)
  → AI Agent
    ├─ OpenAI Chat Model (ai_languageModel)
    ├─ HTTP Request Tool (ai_tool)
    ├─ Database Tool (ai_tool)
    └─ Window Buffer Memory (ai_memory)
  → Webhook Response (send AI reply)
```

### 5. Scheduled Tasks (28% of workflows)

**Pattern**: Schedule → Fetch → Process → Deliver → Log

**Use when**: Recurring reports, periodic data fetching, maintenance tasks

```
Schedule (daily at 9 AM)
  → HTTP Request (fetch analytics)
  → Code (aggregate data)
  → Email (send formatted report)
  → Error Trigger → Slack (notify on failure)
```

---

## MCP Tools Guide

### Tool Selection Workflow

```
1. search_nodes({query: "keyword"})           → Find node
2. get_node_essentials({nodeType: "..."})     → Understand config
3. validate_node_operation({...})             → Check config
4. n8n_create_workflow({...})                 → Build
5. n8n_validate_workflow({id})                → Verify
6. n8n_update_partial_workflow({...})         → Iterate
```

**Timing patterns** (from real usage):
- search → essentials: 18s average
- validate → fix → validate: 23s thinking, 58s fixing
- workflow edits: 56s average between edits

### Tool Categories

**Node Discovery**:
- `search_nodes` - Find nodes by keyword (99.9% success)
- `get_node_essentials` - Get operations, properties, examples (91.7% success)
- `list_nodes` - Browse by category
- `search_node_properties` - Find specific fields

**Validation**:
- `validate_node_minimal` - Required fields only (fast)
- `validate_node_operation` - Full validation with profiles
- `validate_workflow` - Complete workflow check

**Workflow Management**:
- `n8n_create_workflow` - Create new workflow
- `n8n_update_partial_workflow` - Edit existing (15 operation types)
- `n8n_list_workflows`, `n8n_get_workflow` - Browse workflows

**Templates**:
- `search_templates` - Search 2,653 real workflows
- `get_template` - Get template details

---

## Critical: nodeType Formats

**Two different formats for different tools!**

### Format 1: Search/Validate Tools
```javascript
"nodes-base.slack"
"nodes-base.httpRequest"
"nodes-langchain.agent"
```
Used by: search_nodes, get_node_essentials, validate_node_*, get_property_dependencies

### Format 2: Workflow Tools
```javascript
"n8n-nodes-base.slack"
"n8n-nodes-base.httpRequest"
"@n8n/n8n-nodes-langchain.agent"
```
Used by: n8n_create_workflow, n8n_update_partial_workflow, list_node_templates

### Conversion
search_nodes returns BOTH formats:
```javascript
{
  "nodeType": "nodes-base.slack",              // For search/validate
  "workflowNodeType": "n8n-nodes-base.slack"   // For workflow tools
}
```

---

## Validation Profiles

| Profile | Use Case |
|---------|----------|
| `minimal` | Required fields only (fast, permissive) |
| `runtime` | Values + types (recommended for pre-deployment) |
| `ai-friendly` | Reduce false positives (for AI configuration) |
| `strict` | Maximum validation (for production) |

```javascript
// Always specify profile explicitly
validate_node_operation({
  nodeType: "nodes-base.slack",
  config: { resource: "channel", operation: "create" },
  profile: "runtime"  // Recommended
});
```

---

## Common Mistakes

### 1. Wrong nodeType Format
```javascript
❌ get_node_essentials({nodeType: "slack"})              // Missing prefix
❌ get_node_essentials({nodeType: "n8n-nodes-base.slack"}) // Wrong prefix
✅ get_node_essentials({nodeType: "nodes-base.slack"})    // Correct!
```

### 2. Using get_node_info Instead of get_node_essentials
```javascript
❌ get_node_info({...})     // 100KB+ data, 20% failure rate
✅ get_node_essentials({...}) // 5KB data, 91.7% success
```

### 3. Webhook Data Structure
```javascript
❌ {{$json.email}}           // Won't work
✅ {{$json.body.email}}      // Correct - data nested under body
```

### 4. Not Using Smart Parameters
```javascript
// Old way (manual sourceIndex)
{ type: "addConnection", source: "IF", target: "Handler", sourceIndex: 0 }

// New way (semantic)
{ type: "addConnection", source: "IF", target: "True Handler", branch: "true" }
{ type: "addConnection", source: "Switch", target: "Handler A", case: 0 }
```

### 5. Multiple Input Items
```javascript
// Process first item only
{{$json[0].field}}

// Or use "Execute Once" mode on the node
```

### 6. Expression Errors
```javascript
❌ $json.field      // Shows as literal text
✅ {{$json.field}}  // Properly evaluated
```

---

## Workflow Creation Checklist

### Planning
- [ ] Identify pattern (webhook, API, database, AI, scheduled)
- [ ] List required nodes (use search_nodes)
- [ ] Understand data flow (input → transform → output)
- [ ] Plan error handling strategy

### Implementation
- [ ] Create workflow with appropriate trigger
- [ ] Add data source nodes
- [ ] Configure authentication/credentials
- [ ] Add transformation nodes (Set, Code, IF)
- [ ] Add output/action nodes
- [ ] Configure error handling

### Validation
- [ ] Validate each node (validate_node_operation)
- [ ] Validate complete workflow (validate_workflow)
- [ ] Test with sample data
- [ ] Handle edge cases (empty data, errors)

### Deployment
- [ ] Review workflow settings (execution order, timeout)
- [ ] ⚠️ Activate workflow manually in n8n UI (API cannot activate)
- [ ] Monitor first executions
- [ ] Document workflow purpose

---

## Data Flow Patterns

**Linear**: `Trigger → Transform → Action → End`
- Use for simple single-path workflows

**Branching**: `Trigger → IF → [True Path] / [False Path]`
- Use for conditional actions

**Parallel**: `Trigger → [Branch 1] + [Branch 2] → Merge`
- Use for independent simultaneous operations

**Loop**: `Trigger → Split in Batches → Process → Loop (until done)`
- Use for large dataset processing

**Error Handler**: `Main Flow → [Success] / [Error Trigger → Handler]`
- Use for separate error handling workflow

---

## Auto-Sanitization Behavior

**ALL nodes are sanitized on ANY workflow update.**

Auto-fixes applied:
- Binary operators (equals, contains) → removes singleValue
- Unary operators (isEmpty, isNotEmpty) → adds singleValue: true
- IF/Switch nodes → adds missing metadata

Cannot fix:
- Broken connections
- Branch count mismatches
- Paradoxical corrupt states

---

## Tool Availability

**Always Available** (no n8n API needed):
- search_nodes, list_nodes, get_node_essentials ✅
- validate_node_minimal, validate_node_operation ✅
- validate_workflow, get_property_dependencies ✅
- search_templates, get_template ✅
- tools_documentation, get_database_statistics ✅

**Requires n8n API** (N8N_API_URL + N8N_API_KEY):
- n8n_create_workflow ⚠️
- n8n_update_partial_workflow ⚠️
- n8n_validate_workflow (by ID) ⚠️
- n8n_list_workflows, n8n_get_workflow ⚠️

---

## Best Practices

### ✅ Do
- Use `get_node_essentials` over `get_node_info` (91.7% vs 80%)
- Specify validation profile explicitly (`runtime` recommended)
- Use smart parameters (branch="true", case=0)
- Follow search → essentials → validate workflow
- Iterate workflows (avg 56s between edits)
- Validate after every significant change
- Use `includeExamples: true` for real configs
- Start with simplest pattern that solves the problem
- Use descriptive node names
- Handle error scenarios

### ❌ Don't
- Build workflows in one shot (iterate!)
- Use `get_node_info` unless necessary (20% failure!)
- Forget nodeType prefix (nodes-base.*)
- Skip validation profiles
- Use full prefix with search tools
- Ignore auto-sanitization behavior
- Hardcode credentials in parameters
- Forget empty data edge cases

---

## Quick Start Examples

### Webhook → Slack
```
1. Webhook (path: "form-submit", POST)
2. Set (map: {{$json.body.name}}, {{$json.body.email}})
3. Slack (post message to #notifications)
```

### Daily Report
```
1. Schedule (cron: 0 9 * * *)
2. HTTP Request (GET analytics API)
3. Code (aggregate data)
4. Email (send formatted report)
5. Error Trigger → Slack (notify failures)
```

### Database Sync
```
1. Schedule (every 15 minutes)
2. Postgres (query: SELECT * WHERE updated_at > $lastRun)
3. IF (check: {{$json.length}} > 0)
4. MySQL (insert batch)
5. Postgres (update last_sync timestamp)
```

### AI Chat Assistant
```
1. Webhook (receive message)
2. AI Agent
   - Model: OpenAI Chat (ai_languageModel)
   - Tools: HTTP Request, Database (ai_tool)
   - Memory: Window Buffer (ai_memory)
3. Webhook Response (return AI reply)
```

---

## Database Statistics

- 537 nodes available
- 270 AI tools
- 2,653 templates in library

Use `search_templates` and `get_template` to find real workflow examples!

---

## Summary

**Key Points**:
1. **5 core patterns** cover 90%+ of use cases
2. **nodeType formats differ**: `nodes-base.*` (search) vs `n8n-nodes-base.*` (workflows)
3. Use **get_node_essentials** not get_node_info (5KB vs 100KB)
4. Specify **validation profiles** (runtime recommended)
5. Use **smart parameters** (branch, case)
6. **Auto-sanitization** runs on ALL nodes during updates
7. Workflows are built **iteratively** (56s avg between edits)
8. Webhook data is under **$json.body**

**Standard Workflow**:
1. search_nodes → find node
2. get_node_essentials → understand config
3. validate_node_operation → check config
4. n8n_create_workflow → build
5. n8n_validate_workflow → verify
6. n8n_update_partial_workflow → iterate (repeat 5-6)
