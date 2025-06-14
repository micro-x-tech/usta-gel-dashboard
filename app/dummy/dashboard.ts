import type { Craftsman } from "~/types/common";
import { OrderStatus, type Order } from "~/types/order";
import { craftsmen } from "./craftsman";

export const statistics = {
  activeCraftsmen: 245,
  activeCraftsmenChangePercentage: 12,
  waitingOrders: 18,
  waitingOrdersChangePercentage: -3,
  completedOrders: 1284,
  completedOrdersChangePercentage: -18,
  dailyRevenue: 1429,
  dailyRevenueChangePercentage: 5,
  newRegistrations: 24,
  newRegistrationsChangePercentage: 8,
  reportedProblems: 6,
  reportedProblemsChangePercentage: -2,
};

export const orders: Order[] = [
  {
    id: 1,
    title: "Sifariş #1001",
    serviceType: "Santexnika xidməti",
    date: "2025-01-01T12:00:00Z",
    status: OrderStatus.COMPLETED,
  },
  {
    id: 2,
    title: "Sifariş #1002",
    serviceType: "Santexnika xidməti",
    date: "2025-01-01T12:00:00Z",
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: 3,
    title: "Sifariş #1003",
    serviceType: "Santexnika xidməti",
    date: "2025-01-01T12:00:00Z",
    status: OrderStatus.WAITING,
  },
  {
    id: 4,
    title: "Sifariş #1004",
    serviceType: "Santexnika xidməti",
    date: "2025-01-01T12:00:00Z",
    status: OrderStatus.COMPLETED,
  },
  {
    id: 5,
    title: "Sifariş #1005",
    serviceType: "Santexnika xidməti",
    date: "2025-01-01T12:00:00Z",
    status: OrderStatus.IN_PROGRESS,
  },
];

export const newCraftsmen: Craftsman[] = craftsmen.slice(0, 5);
