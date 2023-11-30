import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";




export const Nav = () => {

    const [menuIcon, setMenuIcon] = useState();

    const Nav = styled.nav`
   .navbar-list{
   
        gap:4.8rem;
        align-items:center;
        display:flex;
    
        li{
            list-style:none;
            .navbar-link{
                &:link,
                &:visited {
                display: inline-block;
                text-decoration: none;
                font-size: 1.8rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.3s linear;
                }

                &:hover,
                &:active
                {
                    color: ${({ theme }) => theme.colors.helper}
                }
            }
        
        }
   }

   .mobile-navbar-btn
   {

       display:none;
   }

   .close-outline
   {

       display:none;
   }

   @media(max-width : ${({theme})=> theme.media.mobile})
   {
        .mobile-navbar-btn
        {
    
            display:inline-block;
            border: ${({ theme }) => theme.colors.black};

            .mobile-nav-icon {
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.black};
            }
        }

        .navbar-list {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
    
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
    
            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            /* transform-origin: top; */
            transition: all 3s linear;
          }

          .active .mobile-nav-icon {
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 3%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 9999;
          }
    
          .active .close-outline {
            display: inline-block;
          }

          .active .navbar-list {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            transition: all 3s linear;
    
            li{
                list-style:none;
                .navbar-link{
                    &:link,
                    &:visited {
                   
                    font-size: 4.2rem;
                   
                   
                }
            
            }
          }

        
   }

   



  `
    return (
        <Nav>
            <div className= {menuIcon?'active navbar' : 'navbar'}>
                <ul className='navbar-list'>
                    <li className='navbar-items'>
                        <NavLink to='/' className='navbar-link'
                         onClick={() => setMenuIcon(false)}
                        >Home</NavLink>

                    </li>
                    <li className='navbar-items'>
                        <NavLink to='/about' className='navbar-link'
                         onClick={() => setMenuIcon(false)}
                        >About</NavLink>

                    </li>
                    <li className='navbar-items'>
                        <NavLink to='/' className='navbar-link'
                         onClick={() => setMenuIcon(false)}
                        >Products</NavLink>

                    </li>
                    <li className='navbar-items'>
                        <NavLink to='/' className='navbar-link'
                        onClick={() => setMenuIcon(false)}
                        >Contact</NavLink>

                    </li>

                    <li className='navbar-items'>
                        <NavLink to='/cart' className='navbar-link'>
                            <FiShoppingCart className='cart-trolley' />
                        </NavLink>

                    </li>
                </ul>

                {/* two button for open and close of menu */}
                <div className="mobile-navbar-btn">
                    <CgMenu
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={() => setMenuIcon(true)}

                    />
                    <CgClose
                        name="close-outline"
                        className="mobile-nav-icon close-outline"
                        onClick={() => setMenuIcon(false)}
                    />
                </div>
            </div>
        </Nav>
    )
}
