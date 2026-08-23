type PageHeaderProps = {
  icon: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ icon, title, subtitle }: PageHeaderProps) {
  return (
    <div className="container pageheader-container text-center">
      <div className="ph-icon">
        <i className={icon}></i>
      </div>
      <h1 className="ph-main-title">{title}</h1>
      {subtitle && <p className="ph-subtitle">{subtitle}</p>}
      <div className="ph-header-line"></div>
    </div>
  );
}