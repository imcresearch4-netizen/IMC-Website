export default function TypedHeader({ text }: { text: string }) {
  return (
    <div className="container pageheader-container">
      <span id="typing">{text}</span>
    </div>
  );
}