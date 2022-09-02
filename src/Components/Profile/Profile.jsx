import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return(
        <main>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </main>
    );
}

export default Profile;