import styled from 'styled-components';

const Wrapper = styled.button`
    border:2px solid ${props => props.theme.color.blue};
    color:#000;
    background:transparent;
    height:40px;
    max-width:370px;
    width:80%;
    font-size:18px;
    @media(min-width:768px){
           max-width:250px;
            }
`;

function Button({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Button
