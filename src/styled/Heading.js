import styled from 'styled-components';

const Wrapper = styled.h2`
    font-family:${props => props.theme.fam.bold};
    font-size:30px;
    margin-bottom:30px;
    @media(min-width:992px){
           font-size:40px;
           margin-bottom:50px;
            }
`;

function Heading({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Heading
