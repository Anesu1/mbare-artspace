/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import {useState} from 'react';
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 99;
  .hamburger {
    position: absolute;
    padding: 30px 27px 27px 28px;
    right: 5%;
    top: 15%;
    z-index: 9;
    span {
      width: 20px;
      height: 7px;
      background: #ffffff;
      position: absolute;
      border-radius: 2px;
      transition: 0.7s;
      &:before {
        width: 200%;
        height: 100%;
        background: #ffffff;
        content: "";
        position: absolute;
        top: -12px;
        right: 0%;
        border-radius: 2px;
        transition: 0.7s;
      }
      &:after {
        width: 200%;
        height: 100%;
        background: #ffffff;
        content: "";
        position: absolute;
        top: 12px;
        right: 0%;
        border-radius: 2px;
        transition: 0.7s;
      }
    }
  }
  .open{
      span{
          background: #000;
          transform:translateX(-20px);
          &:before{
            transform:translateX(20px);
            background:#000;
          }
          &:after{
            transform:translateX(20px);
            background:#000;
          }
      }
  }
  ul {
    position: absolute;
    top: 0;
    right: 0;
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
    z-index: 8;
    background: ${(props) => props.theme.color.lightblue};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width:0;
    transition:0.7s;
    
    li {
        width: max-content;
      a {
        text-decoration: none;
        color: #000;
        display: block;
        padding: 20px;
        font-family: ${(props) => props.theme.fam.semibold};
        font-size: 20px;
      }
    }
  }
  .change{
      max-width:100%;
      @media(min-width:768px){
          max-width:50%;
      }
  }
  .icons {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top:50px;
    @media(min-width:768px){
          display: none;
      }
    svg {
      border: 1px solid #000;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      padding: 8px;
    }
  }
  
`;

function Header() {
    const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <div className={open ? 'hamburger open': 'hamburger'} onClick={()=> setOpen(!open)} >
        <span></span>
      </div>
      <ul className={open ? 'change' : ''}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Museum</a>
        </li>
        <div className="icons">
          <TiSocialFacebook />
          <TiSocialTwitter />
          <FaInstagram />
        </div>
      </ul>
    </Wrapper>
  );
}

export default Header;
