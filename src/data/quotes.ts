/**
 * Daily quotes from Dr. Toby Potter
 * Each quote is tied to a protocol day number (1-30)
 * These reflect Toby's direct, no-BS, execution-focused philosophy
 */
export const TOBY_QUOTES: Record<number, string> = {
  1: "You don't have a knowledge problem. You have an execution problem.",
  2: "Most CEOs dramatically overestimate how much time they spend on strategic work.",
  3: "Systems create time.",
  4: "If it's going to be, it's up to me.",
  5: "The gap between $500K and $5M isn't more effort — it's infrastructure.",
  6: "Stop being sales. Start being solutions.",
  7: "Motivation and information without education leads to frustration.",
  8: "Staying stuck is the most expensive decision you'll ever make.",
  9: "We don't coach. We partner with you to execute.",
  10: "Whatever the mind can conceive, the body will achieve.",
  11: "Faith and fear both demand you believe in something you can't see.",
  12: "Install the infrastructure. Scale your business.",
  13: "The Unshakable Culture — a team that doesn't just drink the Kool-Aid, they make it.",
  14: "97% of the businesses we work with — the CEO is the problem.",
  15: "Your business should serve your life, not consume it.",
  16: "You can't delegate what you haven't defined.",
  17: "The best time to build your bench was yesterday. The second best time is today.",
  18: "Your calendar doesn't lie. It reveals what you actually value.",
  19: "Stop managing people. Start leading outcomes.",
  20: "If you're the smartest person in the room, you're in the wrong room.",
  21: "Systems beat motivation every single time.",
  22: "The work you avoid today becomes the crisis you manage tomorrow.",
  23: "Your business grows to the level of your leadership, then it stops.",
  24: "Clarity is the ultimate competitive advantage.",
  25: "You don't need more hours. You need better systems.",
  26: "The only thing worse than training someone and losing them is not training them and keeping them.",
  27: "Your business is a reflection of your standards.",
  28: "Stop planning. Start executing.",
  29: "The path to $10M isn't working harder — it's building better.",
  30: "An empire isn't built in a day. But it is built daily.",
};

/**
 * Get quote for a specific day number
 * Falls back to day 1 if day number is invalid
 */
export function getQuoteForDay(dayNumber: number): string {
  const quote = TOBY_QUOTES[dayNumber];
  return quote || TOBY_QUOTES[1];
}
