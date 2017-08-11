import React from 'react';

const Profile = (props) => {
  return (
    <div className="user-card">
      <h1>{props.user.firstName} {props.user.lastName}</h1>
      <h3>{props.user.email}</h3>
      <img src={props.user.avatar} alt='dummy alt text'/>
    </div>
  )
}

export default Profile;
