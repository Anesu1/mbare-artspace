import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.footer`
    color:#ffffff;
    background:${props => props.theme.color.blue};
    padding:5%;
    position: relative;
    .get-inner{
        @media(min-width:768px){
            display:flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width:80%;
        }

        .inner{
            margin-bottom:40px;
            @media(min-width:768px){
            width:40%;
        }
        &:nth-child(3),&:last-child{
            @media(min-width:768px){
           margin-bottom:0;
        }
        }
            p{
                margin-bottom:5px;
                @media(min-width:768px){
           margin:0;
        }
            }
        }
    }
    span{
        width:max-content;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(180deg) translateY(50%);
        position:absolute;
        right:10%;
        top:50%;
        padding-left:15px;
        @media(min-width:768px){
            top:60%;
            right:15%;
        }
        &:before{
            height:150%;
            width:2px;
            background:#ffffff;
            content:"";
            left:0;
            position:absolute;
            top:-25%;
        }
    }
`;

function Footer() {
  return (
    <Wrapper>
      <Heading>Get In Touch </Heading>
      <div className="get-inner">
        <div className="inner">
          <Paragraph>Geri Kam, Project Coordinator</Paragraph>
          <Paragraph>kamgeri@gmail.com</Paragraph>
          <Paragraph>WhatsApp +263-782-744-881</Paragraph>
        </div>
        <div className="inner">
          <Paragraph>Moffat, Artist</Paragraph>
          <Paragraph>WhatsApp +263-773-084-381</Paragraph>
        </div>
        <div className="inner">
          <Paragraph>Nora Müller, Project Coordinator</Paragraph>
          <Paragraph>WhatsApp +263-784-618-590</Paragraph>
        </div>
        <div className="inner">
          <Paragraph>Gari, Community Liason</Paragraph>
          <Paragraph>+263 773 601 931</Paragraph>
        </div>
      </div>
      <span>Mbare_Art_Space</span>
    </Wrapper>
  );
}

export default Footer;
