/*
import React from 'react';
import Link from "next/link";

class Header extends React.Component{
    render() {
        const title = this.props.title;
        return (
            <div>
                <p>{title}</p>
                <Link href="/"><a>Home </a></Link>
                <Link href="/about"><a>About </a></Link>
                <Link href="/blogs"><a>Blogs </a></Link>
                <Link href="/portfolios"><a>Portfolios </a></Link>
                <Link href="/cv"><a>CV </a></Link>
            </div>
        );
    }
}

export default Header;
*/

import React from 'react';
import Link from "next/link";
import Head from 'next/head';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    const NavLinkSetup = (props) => {
        const {route, title} = props;
        return(
            <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
        );
    };

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