import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../containers/home/home";
import Forms from "../containers/forms/forms";
import NotFound from "../components/notFound/notFound";
import BaseLayout from "../components/baseLayout/baseLayout";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/app" element={<BaseLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="forms" element={<Forms />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/app/home" />} />
            <Route path="/app" element={<Navigate to="/app/home" />} />
        </Routes>
    )
}

export default Navigation;