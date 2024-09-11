export default function Header({ title, titleClass }) {
  return (
    <header>
      <div className={titleClass}>
        {title}
      </div>
    </header>
  );
}
