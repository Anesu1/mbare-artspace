import styled from 'styled-components';

const Wrapper = styled.p`
     font-family:${props => props.theme.fam.semibold};
    font-size:15px;
    margin-bottom:20px;
    line-height:1.3;
    @media(min-width:992px){
            font-size:25px;
            
        }
`;

function Paragraph({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Paragraph
