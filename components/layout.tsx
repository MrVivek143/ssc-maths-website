type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {children}
    </main>
  );
}