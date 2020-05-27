import React from 'react';
import {Container} from "reactstrap";
import Header from "../container/header";
import Footer from "../container/footer";

export default class NotFound extends React.Component {


    render() {
        return (

            <div className={'block'}>
                <br/>
                <Container>

                  <Header/>

                    <br/>

                    <h1>NotFound - 404 </h1>

                    <Footer/>

                </Container>
            </div>
        );
    }
}



