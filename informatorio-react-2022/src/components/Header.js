import React, {Component, Fragment} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">React & Material-UI Sample Aplication</Navbar.Brand>
                    <Nav className="me-auto">   
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }

}

export default Header;