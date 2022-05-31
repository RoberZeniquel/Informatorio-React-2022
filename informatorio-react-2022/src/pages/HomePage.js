import React, {Component, Fragment} from "react";
import CardComponent from "../components/CardComponent";
import Header from "../components/Header";

class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){
        return (
            <>
                <Header/>
                <br></br>
                <CardComponent></CardComponent>
            </>
        )
    }

}

export default HomePage;