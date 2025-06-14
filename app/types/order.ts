export type Order = {
  id: number;
  title: string;
  serviceType: string;
  date: string;
  status: OrderStatus;
};

export enum OrderStatus {
  IN_PROGRESS = "in-progress",
  WAITING = "waiting",
  COMPLETED = "completed",
}
