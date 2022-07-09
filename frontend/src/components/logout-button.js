import React, { useEffect } from "react";
import { Image, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { useAuth0 } from "@auth0/auth0-react";
import { PROFILE, TOGGLER } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
const serverURL = process.env.REACT_APP_BACKEND_PROTOCOL + "://" + process.env.REACT_APP_BACKEND_IP + ":" + process.env.REACT_APP_BACKEND_PORT

const LogoutButton = () => {
  const { logout, user } = useAuth0();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.COMB.user)
  const toggle = useSelector((state) => state.COMB.toggler)


  useEffect(() => {
    axios.get(`${serverURL}/userid/${(user.sub.split("|")[1])}`)
      .then(response => {
        if (response.data !== null) {
          dispatch({
            type: PROFILE, payload: {
              profile_pic: response.data.id,
              width_icon: response.data.width_icon,
              height_icon: response.data.height_icon,
              email: user.email,
              email_verified: user.email_verified,
              name: user.name,
              nickname: user.nickname,
              picture: user.picture,
              sub: user.sub,
              updated_at: user.updated_at
            }
          })
        } else {
          dispatch({
            type: PROFILE, payload: {
              email: user.email,
              email_verified: user.email_verified,
              name: user.name,
              nickname: user.nickname,
              picture: user.picture,
              sub: user.sub,
              updated_at: user.updated_at
            }
          })
        }
      }, (error) => {
        console.log(error)
      });

  }, [user.sub, user.email, user.email_verified, user.name, user.nickname, user.picture, user.updated_at, dispatch])

  function toggleStatus() {
    dispatch({ type: TOGGLER, payload: { checkstatus: !toggle.checkstatus } });
    dispatch({
      type: PROFILE, payload: {
        buttonw: "7rem",
        buttonmr: "5rem",
        buttonmt: "0.1rem",
        buttonml: "8rem",
        file: profile.file,
        profile_pic: profile.profile_pic,
        width_icon: profile.width_icon,
        height_icon: profile.height_icon
      }
    })
  }

  return (
    <>
      <Form className="d-flex">
        {user && <Button variant="light" style={{ marginRight: "1rem" }}>Welcome, {user.email}</Button>}

        { //no user image in db
          ((profile.profile_pic === "none") || (profile.profile_pic === undefined))
            ?

            <Image
              src={profile.picture}
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
            />
            :
            //user image in db  
            <Image
              src={require(`../public/1/image-${profile.profile_pic}.png`)}
              style={{ width: profile.width_icon, height: profile.height_icon, borderRadius: 40 / 2 }} //40 looks good
            />
        }
        <FontAwesomeIcon icon={faCog} cursor={"pointer"} size={"2x"} style={{ marginRight: "1rem", marginLeft: "1rem" }} inverse onClick={toggleStatus} />
        <Button variant="outline-danger"
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >Logout
        </Button>
      </Form>
    </>
  );
};

export default LogoutButton;
