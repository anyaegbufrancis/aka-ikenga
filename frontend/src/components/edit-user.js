import React from "react";
import { Modal, Container, Form, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { PROFILE, TOGGLER, UDETAILS } from "../redux/actions";
import imageResize from "./resize"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
const serverURL = process.env.REACT_APP_BACKEND_PROTOCOL + "://" + process.env.REACT_APP_BACKEND_IP + ":" + process.env.REACT_APP_BACKEND_PORT


const EditUser = () => {
    const toggle = useSelector((state) => state.COMB.toggler.checkstatus)
    const profile = useSelector((state) => state.COMB.user)
    const udetails = useSelector((state) => state.COMB.udetails)
    const { user } = useAuth0();
    const dispatch = useDispatch()


    function onClose() {
        dispatch({
            type: TOGGLER, payload: {
                checkstatus: !toggle
            }
        })
        dispatch({
            type: PROFILE, payload: {
                valid: null,
                picture: user.picture,
                profile_pic: profile.profile_pic,
                width_icon: profile.width_icon,
                height_icon: profile.height_icon,
                preview: null
            }
        })
        dispatch({
            type: UDETAILS, payload: {
                fname: "",
                lname: ""
            }
        })
    }


    const handleFileChange = (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        console.log(udetails.fname !== "" && udetails.lname !== "")
        console.log(profile.valid !== null)
        axios.get(`${serverURL}/userid/${(user.sub.split("|")[1])}`)
            .then(response => {
                const result = response.data
                if (response.data !== null) {
                    dispatch({
                        type: PROFILE, payload: {
                            profile_pic: (user.sub.split("|")[1]),
                            width_icon: result.width_icon,
                            height_icon: result.height_icon,
                            picture: profile.picture,
                            fname: profile.fname,
                            lname: profile.lname
                        }
                    })
                } else {
                    dispatch({
                        type: PROFILE, payload: {
                            picture: profile.picture,
                        }
                    })
                    //return false
                }
                //console.log(imageFile)
                const img = new Image();

                if (imageFile && (imageFile.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif)$/))) {
                    reader.onload = (e) => {
                        img.onload = () => {
                            console.log("loading")
                            const dimension = imageResize(250, img)
                            const iconSize = imageResize(35, img)
                            const pwidth = dimension.width;
                            const pheight = dimension.height;
                            const width_icon = iconSize.width;
                            const height_icon = iconSize.height
                            dispatch({
                                type: PROFILE, payload: {
                                    file: imageFile,
                                    preview: URL.createObjectURL(imageFile),
                                    valid: null,
                                    pwidth: pwidth,
                                    pheight: pheight,
                                    picture: user.picture,
                                    width_icon: width_icon,
                                    height_icon: height_icon,
                                    profile_pic: (user.sub.split("|")[1]),
                                    m: "1.5rem",
                                    buttonw: "7rem",
                                    buttonmr: "5rem",
                                    buttonmt: "0.1rem",
                                    buttonml: "8rem"
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
                    dispatch({
                        type: PROFILE, payload: {
                            valid: "Please select valid image JPG,JPEG,PNG",
                            picture: profile.picture,
                            profile_pic: profile.profile_pic,
                            width: profile.width,
                            height: profile.height,
                            width_icon: profile.width_icon,
                            height_icon: profile.height_icon,
                            preview: null,
                            m: "6rem",
                            comp: true,
                            buttonw: "7rem",
                            buttonmr: "5rem",
                            buttonmt: "0.1rem",
                            buttonml: "8rem"
                        }
                    })
                    return false
                }
                reader.readAsDataURL(imageFile);
            })

    }

    const submit = () => {
        const data = new FormData()
        if (profile.file !== undefined && udetails.fname !== "" && udetails.lname !== "") {
            data.append('image', profile.file, user.sub)
            console.log("sending valid")
            data.append("id", user.sub)
            data.append("width_icon", profile.width_icon)
            data.append("height_icon", profile.height_icon)
            data.append("fname", udetails.fname)
            data.append("lname", udetails.lname)
            data.append("username", udetails.fname+ " " +udetails.lname)
            axios.post(`${serverURL}/imagesave`, data)
                .then(response => {
                    console.log(response.data.width_icon);
                }, (error) => {
                    console.log(error)
                });
            onClose()
        } else if (profile.file === undefined && udetails.fname !== "" && udetails.lname !== "") {
            console.log("sending vanilla")
            axios.post(`${serverURL}/vanillasave`, { username: udetails.fname+ " "+udetails.lname, fname: udetails.fname, lname: udetails.lname, id: user.sub })
                .then(response => {
                    console.log(response.data);
                }, (error) => {
                    console.log(error)
                });
            onClose()
        }
        else {
            dispatch({
                type: PROFILE, payload: {
                    valid: "Please supply at least first and last names...",
                    picture: profile.picture,
                    profile_pic: profile.profile_pic,
                    width: profile.width,
                    height: profile.height,
                    width_icon: profile.width_icon,
                    height_icon: profile.height_icon,
                    preview: null,
                    m: "6rem",
                }
            })
            return false
        }
    }

    function setFirstName(e) {
        if (e.target.id === "fname") {
            dispatch({
                type: UDETAILS, payload: {
                    fname: e.target.value,
                    lname: udetails.lname
                }
            })
        } else if (e.target.id === "lname") {
            dispatch({
                type: UDETAILS, payload: {
                    fname: udetails.fname,
                    lname: e.target.value,
                }
            })
        }
    }


    return (
        <>
            <Modal aria-labelledby="contained-modal-title-vcenter" show={toggle} animation={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update User Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <h6 style={{ color: "red" }}>{profile.valid}</h6>
                    <Container>
                        <Row>
                            <Form.Group controlId="formFile" className="mb-2" onChange={handleFileChange}>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Row className="mb-2 mx-1">
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="First name"
                                        required
                                        id="fname"
                                        onChange={(e) => setFirstName(e)
                                        } />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                        required
                                        id="lname"
                                        onChange={e => setFirstName(e)
                                        } />
                                </Col>
                            </Row>
                        </Row>
                        <Row style={{ marginLeft: profile.m }}>
                            <Col  >
                                { //no user image in db
                                    ((profile.profile_pic === "none") || (profile.profile_pic === undefined))
                                        ?

                                        <img
                                            className="col-6"
                                            alt="existing"
                                            src={profile.picture}
                                            style={{ width: 180, height: 220, borderRadius: 5, marginRight: "1rem", marginLeft: "1rem" }}
                                        />
                                        :
                                        //user image in db  
                                        <>
                                            <img
                                                className="col-6"
                                                src={require(`../public/1/image-${profile.profile_pic}.png`)}
                                                alt="old"
                                                style={{ width: 180, height: 220, borderRadius: 5 }}
                                            />
                                            {!((profile.preview == null || undefined) && (profile.m !== undefined)) &&
                                                <img
                                                    className="col-6"
                                                    src={profile.preview}
                                                    alt=""
                                                    style={{ width: 180, height: 220, borderRadius: 5, border: "solid 5px #008000" }}
                                                />
                                            }
                                        </>}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer >
                    <Container>
                        <Row style={{ marginLeft: profile.buttonml }}>
                            <Col>
                                {((udetails.fname !== "") && (udetails.lname !== "") && (profile.comp !== true)) &&
                                    <Button style={{ width: profile.buttonw, marginRight: profile.buttonmr }} onClick={submit} variant="success">Save</Button>
                                }
                                <Button style={{ width: profile.buttonw, marginTop: profile.buttonmt }} onClick={onClose} variant="danger">Cancel</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditUser