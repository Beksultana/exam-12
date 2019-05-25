import React, {Fragment} from 'react';
import {Nav, Navbar, NavbarBrand} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar dark color="dark" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Photo gallery</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {user ?
                    <Fragment>
                        <UserMenu user={user} logout={logout}/>
                    </Fragment> : <AnonymousMenu/>}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;