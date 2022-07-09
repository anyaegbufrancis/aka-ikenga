// src/views/profile.js

import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

const Profile = () => {
  // const { user } = useAuth0();
  // const dispatch = useDispatch();
  // dispatch({ type: PROFILE, payload: {
  //   email: user.email,
  //   email_verified: user.email_verified,
  //   name: user.name,
  //   nickname: user.nickname,
  //   picture: user.picture,
  //   sub: user.sub,
  //   updated_at: user.updated_at
  // }})
  const profile = useSelector((state)=> state.COMB.user)

  // console.log(profile)

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
        { //no user image in db
          ((profile.profile_pic === "none") || (profile.profile_pic === undefined))
            ?

            <Image
              src={profile.picture}
              style={{ width: 300, height: 400, borderRadius: 5}}
            />
            :
            //user image in db  
            <Image
              src={require(`../public/1/image-${profile.profile_pic}.png`)}
              style={{ width: 300, height: 350, borderRadius: 5}}
            />
        }
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{profile.name}</h2>
          <p className="lead text-muted">{profile.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
        {JSON.stringify(profile, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
