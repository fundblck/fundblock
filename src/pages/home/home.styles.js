import styled from "styled-components";
import { device } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#121113;
`;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#121113;

 @media ${device.laptopL} { 
    max-width: 1400px;
    }

 @media ${device.desktop} {
    max-width: 2500px;
    }
@media ${device.tablet} {
      max-width: 768px;
          }
@media ${device.mobileL} {
              max-width: 425px;
              }
@media ${device.mobileM} {
           max-width: 375px;
                  }
   @media ${device.mobileS} {
           max-width: 320px;
                      }   
    
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:5rem;
      margin-bottom:3rem;
      `;

export const CentreWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#121113;
 
   
      `;



export const TextContainer = styled.div`
width: 50vw;
position: absolute;
top: 55%;
left: 30%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 4.5rem;
    color: #fff;
    font-weight: 600;
    line-height:4rem;
 }

 & h2 {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    line-height:2rem;
    margin-top: 1rem;
   
 }

 & h3{
    font-size:1.3rem;
    color:#fff;
    font-weight:500;
    line-height:1.5rem;
 }

`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:2rem;
   
    
    
`;

export const HeroContainer = styled.div`
width: 50vw;
position: absolute;
top: 85%;
left: 75%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;



`;


export const LButton = styled.button`
display: flex;
background:linear-gradient(150deg, #69FEB0 40%, #5DE4F7 );
width:10rem;
border: 1px solid #5DE4F7; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;


`;

export const EButton = styled.button`
display: flex;
background:#121113;
width:10rem;
border: 1px solid  #5DE4F7; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:1rem;


`;

export const SButton = styled.button`
display: flex;
background: #8BC34A;
width:15rem;
border: 1px solid  #8BC34A; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:20rem;
margin-top:2rem;


`;

export const ImageContainer = styled.section`
 width: 100%;
 height: 50%;
 display: flex;
 gap: 1.5rem;
 justify-content: space-around;
 align-items: center;
 margin-top: 25rem;
`;

export const WelcomeWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#121113;
align-items: center;
margin-top:50rem;
`;    

export const OngoingContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#121113;
align-items: center;
margin-top:28rem;
`;  

export const FundedContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:48rem;
`;  

export const TestimonialsContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:48rem;
`;  

export const ProjectsContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:10rem;
`;  

export const CryptoContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:25rem;
`;  

export const FooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:3rem;
 
 
`;

export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#121113;
align-items: center;
margin-top:-13rem;

 
`;

