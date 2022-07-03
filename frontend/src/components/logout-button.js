// src/components/logout-button.js

import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons"
import Logo1 from "/root/aka-ikenga/frontend/src/public/1/image-62b986b93971ac75e2772127.png"
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <>
      <Form className="d-flex">
        <FontAwesomeIcon icon={faCog} cursor={"pointer"} size={"2x"} inverse />
        <Image
          src={Logo1}
          style={{ width: 40, height: 40, borderRadius: 40 / 2, marginRight: "1rem", marginLeft: "1rem" }}
        />
        <Button variant="danger" 
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
