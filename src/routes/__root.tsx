import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../components/layout/Navigation";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <div className="container h-screen flex flex-col">
        <Navigation />
        <main className="py-2 flex-1">
          <Outlet />
        </main>
        <footer className="text-center py-1 text-md">
          @credits 2025 E-SEO TEAM
        </footer>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
