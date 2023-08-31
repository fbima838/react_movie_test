import { Suspense, lazy } from "react";
import LoadingCard from "../components/Cards/LoadingCard";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("../pages/Home"));
const HomeDetail = lazy(() => import("../pages/Home/Detail/HomeDetail"));

const MainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: (
                <Suspense fallback={<LoadingCard />}>
                    <Home/>
                </Suspense>
            )
        },
        {
            path:"/detail/:id",
            element: (
                <Suspense fallback={<LoadingCard/>}>
                    <HomeDetail />
                </Suspense>
            )
        }
    ]
}

export default MainRoutes;