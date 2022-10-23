import styled from "styled-components";
import Button from "../styled/Button";
import Paragraph from "../styled/Paragraph";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Wrapper = styled.section`
  @media (min-width: 768px) {
    display: flex;
  }
  .red {
    background: ${(props) => props.theme.color.red};
    padding: 20% 5% 5% 5%;
    position: relative;
    @media (min-width: 768px) {
      width: 50%;
      padding-top: 5%;
    }
    @media (min-width: 992px) {
      width: 45%;
      padding-bottom:0;
    }
    h2 {
      color: #ffffff;
      padding: 20px 0;
      font-size: 30px;
      font-family: ${(props) => props.theme.fam.semibold};
      transform: translateX(80px);
      position: relative;
      width: max-content;
      @media (min-width: 992px) {
        width: max-content;
        writing-mode: vertical-lr;
        text-orientation: sideways;
        transform: rotate(180deg) translateY(50%);
        position: absolute;
        left: 10%;
        bottom: 20%;
        font-size: 50px;
        padding-left: 15px;
      }
      &:before {
        width: 105px;
        height: 3px;
        content: "";
        background: #ffffff;
        left: -130px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        @media (min-width: 992px) {
          width: 3px;
          height: 250px;
          left: 36px;
          top: -108px;
        }
        @media (min-width: 1200px) {
          top: -108px;
        }
      }
    }
    .banner-img {
      width: 100%;
      @media (min-width: 992px) {
        transform: translateX(120px);
        z-index: 5;
        position: relative;
      }
    }
    .img {
      display: flex;
      margin: 20px 0;
      justify-content: space-between;
      @media (min-width: 992px) {
        transform: translateX(120px);
        justify-content: unset;
      }
      img {
        width: 80px;
        @media (min-width: 992px) {
          width: 60px;
          margin-right: 20px;
        }
      }
    }
  }
  .blue {
    background: ${(props) => props.theme.color.blue};
    position: relative;
    color: #ffffff;
    padding: 5%;
    @media (min-width: 768px) {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
    @media (min-width: 992px) {
      width: 55%;
      padding-left: 10%;
    }
    h1 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 40px;
      margin-bottom: 30px;
    }

    button {
      border-color: #ffffff;
      color: #ffffff;
    }
  }
  .icons {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      top: 3%;
      left: 5%;
      width: 150px;
      display: flex;
      justify-content: space-between;
      svg {
        border: 1px solid #ffffff;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        padding: 8px;
      }
    }
    @media (min-width: 992px) {
      left: 15%;
    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="red">
        <h2>Welcome</h2>
        <img className="banner-img" src="./images/banner.png" alt="" />
        <div className="img">
          <img src="./images/logo.png" alt="" />
          <img src="./images/logo2.png" alt="" />
          <img src="./images/logo3.png" alt="" />
        </div>
      </div>
      <div className="blue">
        <div className="icons">
          <TiSocialFacebook />
          <TiSocialTwitter />
          <FaInstagram />
        </div>
        <h1>Mbare Art Space</h1>
        <Paragraph>
          Creating a space for artists to showcase their work{" "}
        </Paragraph>
        <Button>Empowering Communities</Button>
      </div>
    </Wrapper>
  );
}

export default Banner;
