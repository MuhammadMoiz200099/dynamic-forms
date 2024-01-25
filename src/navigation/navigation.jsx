import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/home/home";
import Forms from "../containers/forms/forms";
import NotFound from "../components/notFound/notFound";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Navigation;