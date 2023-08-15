export interface TodoItem {
  id: number;
  isAccepted: boolean;
  title: string;
  createdAt: Date;
  acceptedAt?: Date;
}
