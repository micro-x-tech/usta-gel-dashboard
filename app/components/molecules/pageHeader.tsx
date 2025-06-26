interface PageHeaderProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
      <div>
        <p className="text-2xl sm:text-3xl font-bold">{title}</p>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      </div>

      {actions}
    </div>
  );
}
