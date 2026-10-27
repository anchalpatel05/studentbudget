import './PageHero.css';

function PageHero({ className, title, text, children }) {
  return (
    <main className={`page-hero ${className}`}>
      <div className="page-hero-content">
        <h1>{title}</h1>
        <p>{text}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </main>
  );
}

export default PageHero;
