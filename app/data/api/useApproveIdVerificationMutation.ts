import { useMutation } from "@apollo/client";
import { gql } from "../../__generated__";

const APPROVE_ID_VERIFICATION = gql(`
mutation ApproveIdVerification($approveIdVerificationId: UUID!) {
  approveIdVerification(id: $approveIdVerificationId) {
    createdAt
    id
    rejectionReason
    status
    updatedAt
  }
}
`);

export const useApproveIdVerificationMutation = () => {
  return useMutation(APPROVE_ID_VERIFICATION);
};
