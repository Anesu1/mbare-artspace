import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import Button from "../styled/Button";

const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.theme.color.lightblue};
  display: flex;
  flex-direction: column-reverse;
  @media(min-width:768px){
           flex-direction:row;
           justify-content: space-between;
            }
  img {
    width: 100%;
  }
  .right{
      margin-bottom:30px;
      @media(min-width:768px){
           width:47%;
           
            }
  }
  .left{
      z-index:1;
      position:relative;
      @media(min-width:768px){
           width:47%;
           overflow: hidden;
          img{
             transform:scale(1.3) translateY(10%);

              
          }
            }
      &:after{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        background:#00000050;
        top:0;
        left:0;
      }
      button{
          position:absolute;
          bottom:5%;
          right:5%;
          z-index:2;
          border-color:#ffffff;
          color:#ffffff;
      }
  }
`;

function About() {
  return (
    <Wrapper>
      <div className="left">
        <img src="./images/aboutleft.png" alt="" />
        <Button>View Matapi Flats</Button>
      </div>
      <div className="right">
        <img src="./images/aboutright.png" alt="" />
        <Heading>About Mbare</Heading>
        <Paragraph>
          Mbare is home to large number of artists in Zimbabwe, from oil
          painters to material recycle artists.
        </Paragraph>
        <Paragraph>
          The main concern is getting exposure for those artist, that's where
          the urban culture and heritage initiative to come and help.
        </Paragraph>
        <Button>More on the community</Button>
      </div>
    </Wrapper>
  );
}

export default About;
