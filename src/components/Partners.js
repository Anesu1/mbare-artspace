import styled from "styled-components";
import Button from "../styled/Button";
import Card from "../styled/Card";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 5%;
  background:${props => props.theme.color.greybg};
  @media(min-width:768px){
           display:flex;
           flex-wrap:wrap;
           justify-content: space-between;
            }
  h2{
      width:100%;
  }
  .cards-inner{
      display: flex;
      justify-content:space-between;
      flex-wrap:wrap;
      @media(min-width:768px){
           width:100%;
            }
            @media(min-width:992px){
           width:30%;
            }
            
  }
  .middle{
      position:relative;
     
      &:after{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, 0.08);
        top:0;
        left:0;
      }
       @media(min-width:768px){
           width:47%;
            }
            @media(min-width:992px){
           width:30%;
            }
      img{
          width:100%;
      }
      button{
          position:absolute;
          bottom:5%;
          right:5%;
          border-color:#ffffff;
          color:#ffffff;
          width:150px;
          height:25px;
          font-size:13px;
      }
  }
  .right{
    @media(min-width:768px){
           width:47%;
           margin:auto;
           text-align:center;
           button{
               margin:auto;
           }
            }
            @media(min-width:992px){
           width:30%;
           margin:auto 0;
            }
  }
`;

function Partners() {
  return (
    <Wrapper>
      <Heading>Our proud partners</Heading>
      <div className="cards-inner">
        <Card imageSrc="logo.png" title="National Gallery Zim" />
        <Card imageSrc="logo2.png" title="Uncommon.org" />
        <Card imageSrc="polylogo.png" title="Harare Polytechnic" />
        <Card imageSrc="logo3.png" title="City Of Harare" />
      </div>
      <div className="middle">
        <img src="./images/patners.png" alt="" />
        <Button>Uncommon.org</Button>
      </div>
      <div className="right">
        <Paragraph>
          Our mission is empower young adults from low-income communities with
          technology education and the opportunities they need.{" "}
        </Paragraph>
        <Button>View Profile</Button>
      </div>
    </Wrapper>
  );
}

export default Partners;
