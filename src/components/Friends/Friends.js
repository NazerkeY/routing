import {Link, Route, Routes} from "react-router-dom";
import {FriendCard} from "./components/FriendCard/FriendCard";
import {useParams} from "react-router";
import {Home} from "../Home/Home";
import {Profile} from "../Profile/Profile";
import {Login} from "../Login/Login";

export const Friends = () => {
    const {friends} = useParams();
    return (
        <>
        <div className="friends-block d-flex flex-column align-items-center w-auto mt-5">
            <h1>Friends page</h1>
            <ul className="friends-ul">
                <li className="friends-li">
                    <Link to="/friends/alex">Alex</Link>
                </li>
                <li className="friends-li">
                    <Link to="/friends/anna">Anna</Link>
                </li>
                <li className="friends-li">
                    <Link to="/friends/ruslan">Ruslan</Link>
                </li>
            </ul>
        </div>
    <Routes>
        <Route path="/friends/alex" element={<FriendCard name="Alex"/>}/>
    </Routes>
    </>
    );
}