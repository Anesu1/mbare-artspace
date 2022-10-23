import styled from "styled-components";
import Button from "../styled/Button";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
    padding:5%;
    background: ${(props) => props.theme.color.lightblue};
    @media(min-width:768px){
           display: flex;
           justify-content: space-between;
            }
    img{
        width:100%;
        margin:0 aut0;
        @media(min-width:768px){
           width:47%;
            }
    }
    .inner{
        margin-bottom:30px;
        @media(min-width:768px){
           text-align: center;
           width:47%;
           margin:auto;
            }
    }
`;

function SpaceLovers() {
  return (
    <Wrapper>
      <div className="inner">
        <Heading>A Space For Art Lovers</Heading>
        <Paragraph>
          Mbare Art Space is being built as a multipurpose space where artists
          can create, eat and shop as well learning and playing with kids.
        </Paragraph>
        <Button>Take a Tour</Button>
      </div>
      <img src="./images/lovers.png" alt="" />
    </Wrapper>
  );
}

export default SpaceLovers;
