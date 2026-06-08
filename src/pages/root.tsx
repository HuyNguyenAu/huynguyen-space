import { Outlet } from "react-router";

export const RootPage = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Outlet />
      </div>
    </main>
  );
};
