import Home from "../components/pages/Home"
import Setting from "../components/pages/Setting"
import UserManagement from "../components/pages/UserManagement"

const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
];

export default homeRoutes
