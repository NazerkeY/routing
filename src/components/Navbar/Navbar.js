import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Friends} from "../Friends/Friends";
import {Home} from "../Home/Home"
import {useState} from "react";
import {Login} from "../Login/Login";

export const Navbar = () => {
    const [authed, setAuthed] = useState(false);
    function CheckForAuth({ authed, children }) {
        return authed ?
            children :
            <Navigate to="/login" replace />
    }

    return(
        <>
            <nav>
                <ul className="my-ul">
                    <li className="my-li">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="my-li">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className="my-li">
                        <Link to="/friends">Friends</Link>
                    </li>
                </ul>
                <ul className="my-ul">
                    <li>
                        <Link to="/login">{!authed?"Log in":"Log out"}</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={
                    <CheckForAuth authed={authed}>
                        <Profile />
                    </CheckForAuth>
                } />
                <Route path="/friends" element={
                    <CheckForAuth authed={authed}>
                        <Friends />
                    </CheckForAuth>
                }/>
                <Route path="*" element={<Profile />} />
                <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
            </Routes>
        </>
    )
}