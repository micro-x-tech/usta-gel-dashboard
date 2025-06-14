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
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {actions}
    </div>
  );
}
