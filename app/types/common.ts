export enum CraftsmanStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  WAITING = "waiting",
}

export enum CraftsmanApprovalStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export type Craftsman = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  profession: string;
  createdAt: string;
  rating: number;
  status: CraftsmanStatus;
  orders: number;
  serviceAreas: string[];
  documents: string[];
  applicationDate: string;
  approvalStatus: CraftsmanApprovalStatus;
  approvalDate: string | null;
  trialPeriod: string;
  rejectionReason: string | null;
  rejectionDate: string | null;
};
