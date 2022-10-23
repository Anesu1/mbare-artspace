import styled from "styled-components";
import Heading from "../styled/Heading";
import { AiOutlineSearch } from "react-icons/ai";

const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.theme.color.lightblue};
  h2{
    @media(min-width:768px){
           text-align: right;
            }
  }
  .gallery {
    @media(min-width:768px){
           display: flex;
            }
    .inner {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      @media(min-width:768px){
           width:70%;
            }
    }
    img {
      width: 100%;
      @media(min-width:768px){
           height:100%;
            }
    }
    .img-inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.7s;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.7);
      color: #ffffff;
      svg {
        color: #ffffff;
        height: 30px;
        width: 30px;
      }
    }
  }
`;

const Small = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    .img-inner {
      max-width: 100%;
    }
  }
  @media(min-width:768px){
           width:40%;
           margin-bottom:0;
            }
`;

const Wider = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    .img-inner {
      max-width: 100%;
    }
  }
  @media(min-width:768px){
           width:60%;
           margin-bottom:0;
           
            }
`;

const Bigger = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    .img-inner {
      max-width: 100%;
    }
  }
  @media(min-width:768px){
           width:30%;
           height: 100%;
           margin-bottom:0;
            }
`;

function Space() {
  return (
    <Wrapper>
      <Heading>The Space under construction</Heading>
      <div className="gallery">
        <div className="inner">
          <Wider>
            <img src="./images/space.png" alt="" />
            <div className="img-inner">
              <AiOutlineSearch />
              <h4>Kitchen</h4>
            </div>
          </Wider>
          <Small>
            <img src="./images/brewery.png" alt="" />
            <div className="img-inner">
              <AiOutlineSearch />
              <h4>Kitchen</h4>
            </div>
          </Small>
          <Small>
            <img src="./images/space4.png" alt="" />
            <div className="img-inner">
              <AiOutlineSearch />
              <h4>Kitchen</h4>
            </div>
          </Small>
          <Wider>
            <img src="./images/space5.png" alt="" />
            <div className="img-inner">
              <AiOutlineSearch />
              <h4>Kitchen</h4>
            </div>
          </Wider>
        </div>
        <Bigger>
          <img src="./images/space3.png" alt="" />
          <div className="img-inner">
            <AiOutlineSearch />
            <h4>Kitchen</h4>
          </div>
        </Bigger>
      </div>
    </Wrapper>
  );
}

export default Space;
