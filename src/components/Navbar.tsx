import profile from "../assets/profile.svg"
import { FiUpload } from "react-icons/fi";

export default function Navbar() {
    return (
        <div className="border flex items-center justify-between h-14 w-full px-6">
            <h1>User</h1>
            <div className="flex items-center gap-2">
                <div className="">
                    <FiUpload />
                </div>
                <p>
                    Rohan
                </p>
                <img src={profile} className="w-9 h-9 rounded-full object-cover" alt="" />
            </div>
        </div>
    )
}
