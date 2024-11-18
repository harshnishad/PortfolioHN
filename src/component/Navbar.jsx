import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { Bio } from '../data/constants';
import { MenuRounded } from '@mui/icons-material';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
`;

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    font-weight:500;
    font-size:18px;
    text-decoration: none;
    color: inherit;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        background: ${({ theme }) => theme.bg};
        width: 100%;
        z-index: 9;
    }
`;

const NavLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer; // Added cursor pointer for mobile icon
    display:none;
    @media screen and (max-width:768px){
     display:block;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">HarshNishad</NavLogo>
                <MobileIcon onClick={toggleMenu}>
                    <MenuRounded style={{ color: "inherit" }} />
                </MobileIcon>
                <NavItems isOpen={isOpen}>
                    <NavLink to="#About">About</NavLink>
                    <NavLink to="#Skills">Skills</NavLink>
                    <NavLink to="# Experience">Experience</NavLink>
                    <NavLink to="#Project">Project</NavLink>
                    <NavLink to="#Education">Education</NavLink>
                </NavItems>

                
                <ButtonContainer>
                    <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    );
}

export default Navbar;