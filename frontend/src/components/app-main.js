import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Landing from "./landing";
import SplitPane, { Pane } from 'react-split-pane';
import "../css/app-main.css"

var styles = {color: "purple", fontSize: 40, borderLeft:"5px solid black"}

const AppMain = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    return (
            <SplitPane split="vertical" minSize={"25%"} style={{ position:'relative' , overflow:'hidden' }} >                
                <Container >
                    <h1></h1>
                {numbers.map(number =>
                    <Card  key={number} style={{marginBottom: "1rem"}}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        First Part. Checking things out...
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                    )}
                </Container>
                <Container >
                {numbs.map(number =>
                    <Card  key={number} style={{marginBottom: "1rem"}}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                      By dragging 'draggable' surface you can change size of the first pane. The first pane keeps then its size while the second pane is resized by browser window. By default it is the left pane for 'vertical' SplitPane and the top pane for 'horizontal' SplitPane. If you want to keep size of the second pane and let the first pane to shrink or grow by browser window dimensions, set SplitPane prop primary to second. In case of 'horizontal' SplitPane the height of bottom pane remains the same.                      
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                    )}
                </Container>
            </SplitPane>
    )

};

export default AppMain;
