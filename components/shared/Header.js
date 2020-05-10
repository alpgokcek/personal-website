import React from 'react';
import Head from 'next/head';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }



    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Alp Gökçek</title>
                </Head>
                <Navbar className="port-navbar port-nav-base absolute" color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Alp Gökçek</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <NavLink className="navbar-item" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <NavLink className="navbar-item" href="/about">About</NavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <NavLink className="navbar-item" href="/portfolio">Portfolio</NavLink>
                            </NavItem>

                            <NavItem className="port-navbar-item">
                                <NavLink className="navbar-item" href="/cv">CV</NavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <NavLink className="navbar-item" href="mailto:alp.gokcek1@gmail.com?subject=alpgokcek.com |">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}