import React from "react";
import { Alert, Button } from "react-bootstrap"
import { OPPTOGGLER, PROFILE } from "../redux/actions"
import { useSelector, useDispatch } from "react-redux";

const Success = () => {
  const opptoggle = useSelector((state) => state.COMB.opptoggler.checkstatus)
  const profile = useSelector((state) => state.COMB.user)
  const dispatch = useDispatch()

  function onClose() {
    dispatch({
        type: OPPTOGGLER, payload: {
            checkstatus: !opptoggle
        }
    })
    // dispatch({
    //     type: PROFILE, payload: {
    //         valid: null,
    //         picture: user.picture,
    //         profile_pic: profile.profile_pic,
    //         width_icon: profile.width_icon,
    //         height_icon: profile.height_icon,
    //         preview: null
    //     }
    // })
}
  
    return (
      <>
        <Alert show={opptoggle} variant="success" style={{ width: "30rem" }}>
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
 export default Success