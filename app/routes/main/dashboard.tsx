import {
  CircleAlertIcon,
  CircleCheckBigIcon,
  ClipboardListIcon,
  DollarSignIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";
import LastOrdersListItem from "~/components/organisms/dashboard/lastOrdersListItem";
import NewCraftsmenListItem from "~/components/organisms/dashboard/newCraftsmenListItem";
import PageHeader from "~/components/molecules/pageHeader";
import StatisticCard from "~/components/molecules/statisticCard";

import { statistics, orders, newCraftsmen } from "~/dummy/dashboard";

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Sistemin performansı və əsas göstəricilərin icmalı"
      />

      <div className="grid grid-cols-3 gap-4 mt-8">
        <StatisticCard
          title="Aktiv Ustalar"
          value={statistics.activeCraftsmen}
          description={`Keçən aya nisbətən ${statistics.activeCraftsmenChangePercentage}%`}
          icon={<UsersIcon width={16} height={16} />}
        />
        <StatisticCard
          title="Gözləyən Sifarişlər"
          value={statistics.waitingOrders}
          description={`Dünənə nisbətən ${statistics.waitingOrdersChangePercentage}%`}
          icon={<ClipboardListIcon width={16} height={16} />}
        />
        <StatisticCard
          title="Tamamlanmış Sifarişlər"
          value={statistics.completedOrders}
          description={`Keçən aya nisbətən ${statistics.completedOrdersChangePercentage}%`}
          icon={<CircleCheckBigIcon width={16} height={16} />}
        />
        <StatisticCard
          title="Günlük Gəlir"
          value={statistics.dailyRevenue}
          description={`Dünənə nisbətən ${statistics.dailyRevenueChangePercentage}%`}
          icon={<DollarSignIcon width={16} height={16} />}
          showCurrency
        />
        <StatisticCard
          title="Yeni Qeydiyyatlar"
          value={statistics.newRegistrations}
          description={`Keçən həftəyə nisbətən ${statistics.newRegistrationsChangePercentage}%`}
          icon={<UserPlusIcon width={16} height={16} />}
        />
        <StatisticCard
          title="Bildirilən Problemlər"
          value={statistics.reportedProblems}
          description={`Dünənə nisbətən ${statistics.reportedProblemsChangePercentage}%`}
          icon={<CircleAlertIcon width={16} height={16} />}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="border rounded-lg p-6">
          <p className="text-2xl font-bold">Son Sifarişlər</p>

          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <LastOrdersListItem key={order.id} order={order} />
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <p className="text-2xl font-bold">Yeni Ustalar</p>

          <div className="mt-6 space-y-4">
            {newCraftsmen.map((craftsman) => (
              <NewCraftsmenListItem key={craftsman.id} craftsman={craftsman} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
