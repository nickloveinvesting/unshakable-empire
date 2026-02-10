export interface ProtocolTask {
  id: string;
  label: string;
  description?: string;
  type?: 'action' | 'measure' | 'reflect';
  input_type?: 'checkbox' | 'number' | 'text' | 'scale';
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
