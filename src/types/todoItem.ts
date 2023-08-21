export interface TodoItem {
  id: number;
  isAccepted: boolean;
  title: string;
  createdAt: Date;
  acceptedAt?: Date;
}

export type SortKeys = 'alphabet' | 'alphabet-reversed' | 'date' | 'date-reversed';
