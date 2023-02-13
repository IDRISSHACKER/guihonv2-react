import React, {lazy, Suspense, useEffect, useState} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/vitrine/home/home.page"))
const Catalogue = lazy(() => import("../pages/vitrine/catalogue/catalogue.page"))
const Dahsboard = lazy(() => import("../pages/admin/dashborad"))
const Photos = lazy(() => import("../pages/admin/photos"))
const Login = lazy(() => import("../pages/auth/login/loginPage"))

function Protected({ isSignedIn, children }: {isSignedIn: boolean, children: any}) {
    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default function AppRouter() {
    const [signed, setSigned] = useState(true)

    useEffect( ()=>{
        setInterval(()=>{
            localStorage.getItem("logged")
                ? setSigned(true)
                : setSigned(false);
        }, 1000)
    }, [])

    return (
        <React.Fragment>
            <React.Fragment>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </React.Fragment>
            <div>
                <Suspense
                    fallback={<Loading />}
                >
                    <Routes>

                        <Route path="login" element={<AuthLayout /> }>
                            <Route index element={<Login />} />
                        </Route>

                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="catalogue" element={<Catalogue />} />
                        </Route>

                        <Route path="admin" element={
                            <Protected isSignedIn={signed}>
                                <AdminLayout />
                            </Protected>
                        }>
                            <Route index element={
                                <Protected isSignedIn={signed}>
                                    <Dahsboard />
                                </Protected>
                                    } />
                            <Route path="dashboard" element={
                                <Protected isSignedIn={signed}>
                                    <Dahsboard />
                                </Protected>
                            } />
                            <Route path="photos" element={
                                <Protected isSignedIn={signed}>
                                    <Photos />
                                </Protected>} />
                        </Route>

                        <Route path="*" element={<Navigate to="home" />} />
                    </Routes>
                </Suspense>
            </div>
        </React.Fragment>
    );
}





