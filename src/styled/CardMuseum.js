import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
margin-bottom:30px;
@media(min-width:768px){
           display: flex;
           align-items:center;
}
    img{
        width:100%;
        margin-bottom:20px;
        @media(min-width:768px){
           width:30%;
           margin-right:30px;
           margin-bottom:0;
        }
    }
`;

function CardMuseum({imageSrc, text}) {
    return (
        <Wrapper>
            <img src={`./images/${imageSrc}`} alt="" />
            <Paragraph>{text}</Paragraph>
        </Wrapper>
    )
}

export default CardMuseum
