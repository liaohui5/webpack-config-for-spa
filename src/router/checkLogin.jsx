import { Navigate } from "react-router-dom";


/**
 * 检查是否登录中间件
 */
function checkLogin({ children }) {
  // 写死
  const isLogin = window.location.href.includes("login=1");
  if (isLogin) {
    return <>{children}</>;
  }

  console.info("请先登录");
  return <Navigate replace to="/" />;
}

export default checkLogin;
