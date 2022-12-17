import { Outlet } from "@remix-run/react";

// this is kinda layout in nextjs 13
export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
