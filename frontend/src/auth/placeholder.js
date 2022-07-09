import React from "react";
import { Modal, Container, Form, Row, Button,  Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { PROFILE, TOGGLER } from "../redux/actions";
import imageResize from "./resize"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const EditUser = () => {
    const toggle = useSelector((state) => state.COMB.toggler.checkstatus)
    const profile = useSelector((state) => state.COMB.user)
    const { user } = useAuth0();
    const dispatch = useDispatch()

    function onClose() {
        dispatch({
            type: TOGGLER, payload: {
                checkstatus: !toggle
            }
        })
    }

    const handleFileChange = (event) => {
        let imageFile = event.target.files[0];        
        let reader = new FileReader();

        if (imageFile.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif)$/)) {
            reader.onload = (e) => {
              const img = new Image();
              img.onload = () => {      
                const dimension = imageResize(220,img)
                const iconSize = imageResize(30, img)
                const width = dimension.width;
                const height = dimension.height;
                const width_icon = iconSize.width;
                const height_icon = iconSize.height  
                dispatch({
                  type: PROFILE, payload: {
                    file: imageFile,
                    preview: URL.createObjectURL(imageFile),
                    valid: null,
                    width: width,
                    height: height,
                    width_icon: width_icon,
                    height_icon: height_icon,
                    picture: profile.picture,
                    profile_pic: profile.profile_pic
                  }
                })
              };
              img.onerror = () => {
                dispatch({
                  type: PROFILE, payload: {
                    valid: "Invalid image content."
                  }
                })
                return false;
              };
              //debugger
              img.src = e.target.result;
            }
          } else {            
            console.log(profile)
            console.log(profile.sub)
            if (profile.sub !== undefined) {
                axios.get(`http://192.168.1.180:3041/userid/${(profile.sub.split("|")[1])}`)
                  .then(response => {
                    if (response.data !== null) {
                        const result = JSON.stringify(response.data)
                        console.log("when response :"+ result)
                      dispatch({
                        type: PROFILE, payload: {
                          profile_pic: result.id,
                          valid: "Please select valid image JPG,JPEG,PNG upload",
                          width_icon: result.width_icon,
                          height_icon: result.height_icon,
                          picture: profile.picture
                        }
                      })
                    } else {
                        console.log("when non response :"+ response.data)
                      dispatch({
                        type: PROFILE, payload: {
                          valid: "Please select valid image JPG,JPEG,PNG",
                        }
                      })
                    }
                  }, (error) => {
                    console.log(error)
                  });
            }  else {
                dispatch({ type: PROFILE, payload: {
                    picture: user.picture,
                    valid: "Please select valid image JPG,JPEG,PNG...",
                }})
            }              
            //return false
          }
          reader.readAsDataURL(imageFile);
    }
    //console.log((profile.preview !== null || undefined))
    // if ((profile.preview !== null || undefined)) {
    //     console.log("doesnt exist: "+profile.preview.split(":")[1])
    // } else {        
    //     console.log("exists :"+profile.preview)
    // }

    //console.log("profile_pic: "+profile.profile_pic, "picture: "+profile.picture)

    return (
        <Modal aria-labelledby="contained-modal-title-vcenter" show={toggle} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Profile Picture
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <h6 style={{color: "red"}}>{profile.valid}</h6>
                <Container>
                    <Row>
                        <Form.Group controlId="formFile" className="mb-3" onChange={handleFileChange}>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>
                    <Row style={{ marginLeft: "1rem" }}>
                        <Col  >
                            { //no user image in db
                                ((profile.profile_pic === "none") || (profile.profile_pic === undefined))
                                    ?

                                    <img
                                        className="col-6"
                                        alt="existing"
                                        src={profile.picture}
                                        style={{ width: 40, height: 40, borderRadius: 40 / 2, marginRight: "1rem", marginLeft: "1rem" }}
                                    />
                                    :
                                    //user image in db  
                                    <>
                                        <img
                                            className="col-6"
                                            src={require(`../public/1/image-${profile.profile_pic}.png`)}
                                            alt="old"
                                            style={{ width: 180, height: 220, borderRadius: 5 }} //40 looks good
                                        />
                                        <img
                                            className="col-6"
                                            src={profile.picture}
                                            alt="uploaded"
                                           // src={require(`../public/1/image-${profile.profile_pic}.png`)}
                                            style={{ width: 180, height: 220, borderRadius: 5 }} //40 looks good
                                        />
                                    </>
                            }
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer >
                <Container>
                    <Row style={{ marginLeft: "2rem"}}>
                        <Col>
                        <Button style={{width: "7rem", marginRight: "5rem"}} onClick={onClose} variant="success">Save</Button>
                        <Button style={{width: "7rem", marginTop: "0.1rem"}} onClick={onClose} variant="danger">Cancel</Button>
                        </Col>                        
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}

export default EditUser