import React from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";



export default class Header extends React.Component {

        render() {
        return (

            <Container>

                <Nav tabs className={'text-center'}>
                    <NavItem>
                        <NavLink href="/">login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Welcome">Welcome</NavLink>
                    </NavItem>

                </Nav>

            </Container>

        )
    }


};