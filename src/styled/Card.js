/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

const Wrapper = styled.div`
    width:47%;
    background:rgba(0, 0, 0, 0.6);
    transition:0.7s;
    padding:5% 0;
    display: flex;
    flex-direction: column;
    margin-bottom:20px;
    @media(min-width:992px){
          padding:5% 0 10px;
            }
    &:hover{
        background-color:#000000 ;
    }
    img{
        height:70%;
        margin:20px auto;
        @media(min-width:768px){
           height:50%;
            }
    }
    a{
        text-decoration:none;
        color:#ffffff;
        text-align: center;
        font-size:13px;
    }
`;

function Card({imageSrc, title}) {
    return (
        <Wrapper>
            <img src={`./images/${imageSrc}`} alt="" />
            <a href="#">{title}</a>
        </Wrapper>
    )
}

export default Card
