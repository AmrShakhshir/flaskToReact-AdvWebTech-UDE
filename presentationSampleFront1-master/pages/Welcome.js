import React from 'react';
import {Container} from "reactstrap";
import Header from "../container/header";
import Footer from "../container/footer";

export default class Welcome extends React.Component {


    render() {
        return (

         
                <Container>
                    <Header/>
                    <br/><br/><br/>
                    <h6>Welcome Page</h6>
                    <Footer/>
                </Container>
            
        );
    }
}



