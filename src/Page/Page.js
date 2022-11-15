export function Page({ title, children }) {
  return (
    <main className="page">
      <h1 className="page__title">{title}</h1>
      {children}
    </main>
  );
}
