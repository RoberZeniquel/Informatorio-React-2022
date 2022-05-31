import React, {Component, Fragment} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import logo from '../logo512.png';

class CardComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){
        return(
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card style={{ width: '18rem' }} className='CardComponent shadow-sm bg-light'>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <button type="button" class="ButtonLink btn btn-link">GO TO COURSE</button>
                                    </Card.Body>
                                    
                                </Card>
                                <Card style={{ width: '18rem' }} className='CardComponent shadow-sm bg-light'>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                        <button type="button" class="ButtonLink btn btn-link">GO TO COURSE</button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className='CardComponent shadow-sm bg-light'>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                        <button type="button" class="ButtonLink btn btn-link">GO TO COURSE</button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default CardComponent;