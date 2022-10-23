import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media(min-width:768px){
            width:48%;
            margin-bottom:30px;
        }
        @media(min-width:992px){
            width:30%;
        }
  &:hover {
    .inner {
      max-width: 100%;
    }
  }
    img {
      width: 100%;
    }
    .inner {
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
`;

function Image({ imageSrc }) {
  return (
    <Wrapper>
      <img src={`./images/${imageSrc}`} alt="" />
      <div className="inner">
        <FiInstagram />
        <p>Mbare_Art_Space</p>
      </div>
    </Wrapper>
  );
}

export default Image;
