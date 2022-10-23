import styled from 'styled-components';
import Button from '../styled/Button';
import CardMuseum from '../styled/CardMuseum';
import Heading from '../styled/Heading';

const Wrapper = styled.section`
    background:${props => props.theme.color.greybg};
    padding:5%;
    .inner{
        position: relative;
       div{
           &:first-child{
          
            @media(min-width:992px){
                 align-items:flex-start;
                p{
                  padding-top:30px;  
                }
           
            }
           }
           &:nth-child(2){
            @media(min-width:992px){
                position: absolute;
                top:50%;
                left:20%;
                transform: translateY(-50%);
            }
           }
           &:last-child{
          
            @media(min-width:992px){
             align-items:flex-end;
             margin-top:50px;
             
             p{
                 padding-bottom:30px;
                 width:50%;
             }
            }
           }
       }
        
    }
`;

function Museum() {
    return (
        <Wrapper>
            <Heading>The Children's Museum</Heading>
            <div className="inner">
                       <CardMuseum imageSrc="museum.png" text="We are open for play! We're doing the best we can to serve as many families as possible while still abiding by the state order that greatly limits our capacity." />
            <CardMuseum imageSrc="museum2.png" text="Children's museums are institutions that provide exhibits and programs to stimulate informal learning experiences for children" />
            <CardMuseum imageSrc="museum3.png" text="The children's museum of Mbare is a hands on museum that allows children ages 0-8 to experience the possibility of play. Explore the museum with us!" />
          
            </div>
       <Button>Explore</Button>
        </Wrapper>
    )
}

export default Museum
