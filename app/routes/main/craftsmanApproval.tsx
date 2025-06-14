import { CircleCheckIcon, CircleXIcon, ClockIcon } from "lucide-react";
import { useState } from "react";
import Badge from "~/components/atoms/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/atoms/tabs";
import PageHeader from "~/components/molecules/pageHeader";
import ApprovedCraftsmenTable from "~/components/organisms/craftsmanApproval/approvedCraftsmenTable";
import PendingCraftsmenTable from "~/components/organisms/craftsmanApproval/pendingCraftsmenTable";
import RejectedCraftsmenTable from "~/components/organisms/craftsmanApproval/rejectedCraftsmenTable";
import { craftsmenWaitingApproval } from "~/dummy/craftsman";
import { CraftsmanApprovalStatus } from "~/types/common";

export default function CraftsmanApproval() {
  const [approvalStatusFilter, setApprovalStatusFilter] =
    useState<CraftsmanApprovalStatus>(CraftsmanApprovalStatus.PENDING);

  return (
    <div>
      <PageHeader
        title="Ustaların Təsdiqi"
        description="Qeydiyyatdan keçmiş ustaların təsdiq prosesini idarə edin"
      />

      <Tabs
        value={approvalStatusFilter}
        onValueChange={(value) => {
          setApprovalStatusFilter(value as CraftsmanApprovalStatus);
        }}
      >
        <TabsList className="mb-2 h-10 rounded-sm p-1">
          <TabsTrigger
            value={CraftsmanApprovalStatus.PENDING}
            className="rounded-sm px-3 cursor-pointer data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground"
          >
            <ClockIcon size={16} /> Təsdiq Gözləyənlər{" "}
            <Badge>{craftsmenWaitingApproval.length}</Badge>
          </TabsTrigger>
          |
          <TabsTrigger
            value={CraftsmanApprovalStatus.APPROVED}
            className="rounded-sm px-3 cursor-pointer data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground"
          >
            <CircleCheckIcon size={16} /> Təsdiq Edilmiş
          </TabsTrigger>
          |
          <TabsTrigger
            value={CraftsmanApprovalStatus.REJECTED}
            className="rounded-sm px-3 cursor-pointer data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground"
          >
            <CircleXIcon size={16} /> Rədd Edilmiş
          </TabsTrigger>
        </TabsList>

        <TabsContent value={CraftsmanApprovalStatus.PENDING}>
          <PendingCraftsmenTable />
        </TabsContent>
        <TabsContent value={CraftsmanApprovalStatus.APPROVED}>
          <ApprovedCraftsmenTable />
        </TabsContent>
        <TabsContent value={CraftsmanApprovalStatus.REJECTED}>
          <RejectedCraftsmenTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
