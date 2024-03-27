import { Outlet } from "react-router-dom";

/* eslint-disable-next-line */
export interface MainProps { }

export function MainLayout(props: MainProps) {
  return (
    <div>
      <h1>Welcome to Main!</h1>
      <Outlet />
    </div>
  );
}

export default MainLayout;
