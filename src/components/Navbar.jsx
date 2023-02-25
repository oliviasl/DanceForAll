import React from "react";
import './Navbar.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const StyledButton = styled(Button)({
    color: 'black',
    fontFamily: "Designer",
    marginRight: '5vw',
});

const StyledPersonOutlineIcon = styled(PersonOutlinedIcon)({
    width: '36px',
    height: '36px',
    marginTop: '-6px',
    marginRight: '2vw',
});

const StyledMenuOutlineIcon = styled(MenuOutlinedIcon)({
    width: '36px',
    height: '36px',
    marginTop: '-4px',
    marginLeft: '2vw',
});

const Navbar = () => {
    return (
        <div className="navbar navbar-flex">
            <div className="navbar-flex">
                <StyledMenuOutlineIcon />
                <h1 className="navbar-h1">DFA</h1>
            </div>
            <div className="navbar-flex">
                <StyledButton className="navbar-link">
                    levels
                </StyledButton>
                <StyledButton className="navbar-link">
                    styles
                </StyledButton>
                <StyledPersonOutlineIcon />
            </div>
        </div>
    )
}

export default Navbar;