export interface TodoItem {
  id: number;
  isAccepted: boolean;
  title: string;
  createdAt: Date;
  acceptedAt?: Date;
  priorityColor?: string;
}

export interface SearchTodoQuery {
  searchValue: string;
}

export type SortKeys = 'alphabet' | 'alphabet-reversed' | 'date' | 'date-reversed';
