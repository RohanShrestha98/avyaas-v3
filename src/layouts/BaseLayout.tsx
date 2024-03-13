import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BaseLayout() {
    return (
        <div className="flex">
            <div className="w-1/6">
                <Sidebar />
            </div>
            <div className="w-5/6">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}
