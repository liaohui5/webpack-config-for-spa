import { useRoutesWithMiddleware } from "react-router-middleware-plus";
import routes from "./router";

const App = () => {
  return useRoutesWithMiddleware(routes);
};

export default App;
