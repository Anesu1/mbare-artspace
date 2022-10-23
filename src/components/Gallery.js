import styled from 'styled-components';
import Image from '../styled/Image';

const Wrapper = styled.section`
    padding:5%;
    @media(min-width:768px){
            display:flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
        }
`;

function Gallery() {
    return (
        <Wrapper>
            <Image imageSrc="last1.png" />
            <Image imageSrc="last2.png" />
            <Image imageSrc="last3.png" />
            <Image imageSrc="last4.png" />
            <Image imageSrc="last5.png" />
            <Image imageSrc="last.png" />
        </Wrapper>
    )
}

export default Gallery
