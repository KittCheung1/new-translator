import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import { useState } from "react";

const Profile = () => {
    const apiURL = 'https://trivia-game-noroff-api.herokuapp.com/translations'
    const [userProfile, setUserProfile] = useState([{
        id: 1,
        username: "kitt",
        translations: [
          "hello world",
          "react is fun"
        ]
    }])
    const navigate = useNavigate();

    const startPage = () => {
        navigate("/")
    }

    async function getUser(id) {
        const response = await fetch(`${apiURL}/${id}`);
        const data = await response.json();
        setUserProfile((data));
        console.log(data);
    }




    return (
        <div className="Profile">
            <fieldset >
                <legend>Your latest translations </legend>
                <UserList userProfile={userProfile} />
                <button type="button" className="btn" onClick={startPage}>Back to Login</button>
            </fieldset>
        </div>
    )
}

export default Profile
