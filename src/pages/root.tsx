import { Outlet } from "react-router";

export const RootPage = () => {
  return (
    <main className="min-h-screen bg-background text-primary px-4 py-12 sm:px-6 lg:px-8">
      <Outlet />
    </main>
  );
};
