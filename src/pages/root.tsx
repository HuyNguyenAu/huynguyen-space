import { Layout } from "@/components/layout";
import { Outlet } from "react-router";

export const RootPage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
