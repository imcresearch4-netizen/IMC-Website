type SectionHeaderProps = {
  title: string;
  descriptions?: string[];
};

export default function SectionHeader({ title, descriptions = [] }: SectionHeaderProps) {
  return (
    <div className="ms-section-header">
      <h2>{title}</h2>
      {descriptions.map((d, i) => (
        <div className="ms-section-desc" style={i > 0 ? { marginTop: "-10px" } : undefined} key={d}>
          {d}
        </div>
      ))}
      <div className="ms-section-divider">
        <span className="line"></span>
        <span className="diamond">&#9670;</span>
        <span className="line"></span>
      </div>
    </div>
  );
}