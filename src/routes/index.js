import MainRoutes from "./MainRoutes";
const { useRoutes } = require("react-router-dom");

export default function ThemeRoutes() {
    return useRoutes([MainRoutes])
}