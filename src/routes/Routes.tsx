import React,{lazy, Suspense} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {Box, LinearProgress} from "@mui/material"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/vitrine/home.page"))
const Dahsboard = lazy(() => import("../pages/admin/dashborad"))
const Photos = lazy(() => import("../pages/admin/photos"))

export default function AppRouter() {
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
                    fallback={
                        <Box sx={{ width: "100%" }}>
                            <LinearProgress />
                        </Box>
                    }
                >
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                        </Route>

                        <Route path="admin" element={<AdminLayout />}>
                            <Route index element={<Dahsboard />} />
                            <Route path="dashboard" element={<Dahsboard />} />
                            <Route path="photos" element={<Photos />} />
                        </Route>

                        <Route path="*" element={<Navigate to="home" />} />
                    </Routes>
                </Suspense>
            </div>
        </React.Fragment>
    );
}





