interface StatisticCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  showCurrency?: boolean;
}

export default function StatisticCard({
  title,
  value,
  icon,
  description,
  showCurrency,
}: StatisticCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium">{title}</p>
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold">
          {showCurrency ? `₼${value}` : value}
        </p>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
