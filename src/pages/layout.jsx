import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <p>
        <Link to="/">home</Link>
      </p>
      <p>
        <Link to="/about">about(未登录)</Link>
      </p>
      <p>
        <Link to="/about?login=1">about(模拟已经登录)</Link>
      </p>
      <div>
        {/* 类似于 router-view */}
        <Outlet />
      </div>
    </div>
  );
}
