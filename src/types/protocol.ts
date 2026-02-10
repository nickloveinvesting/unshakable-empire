export interface ProtocolTask {
  id: string;
  label: string;
  description?: string;
}

export interface DayProtocol {
  day: number;
  title: string;
  intention: string;
  tasks: ProtocolTask[];
  educationalContent?: string;
}

export interface PillarProtocol {
  pillarId: number;
  days: DayProtocol[];
}
