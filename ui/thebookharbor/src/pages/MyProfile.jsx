import React from "react";


import MyNavBar from '../components/MyNavBar';
import MySearchBar from '../components/SearchBar';
import UserInfo from "../components/UserInfo";

function MyProfile() {
    return (
        <div>
            <MyNavBar/>
            <MySearchBar/>
            <UserInfo/>
        </div>
    );
}

export default MyProfile;