import styled from "styled-components";

export const FormContainer = styled.form`
   background: #101415;
   color: white;
   padding: 2rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   border-radius: 1rem;
   width: 90%;
   margin: auto;

`
export const UploadFile = styled.div`
   padding: 1.5rem 0;
`
export const ButtonContainer = styled.div`
   display: flex;
   gap: 1rem;
   justify-content: space-between;
`
export const Button = styled.button`
   background: ${({ primary }) => primary ? '#2094ff' : '#a8a8aa'};
   border: none;
   border-width: 0;
   border-style: none;
   padding: .75rem 2rem;
   white-space: nowrap; 
   border-radius: 999px;
   color: ${({ primary }) => primary ? 'white' : '#121516'};
   font-weight: ${({ primary }) => primary ? '600' : '400'};
   font-size: 1rem;
   width: 100%;
   cursor: pointer;
   transition: .3s;

   &:hover{
      background: ${({ primary }) => primary ? '#2065ff' : '#6b6b77'};
      color: white;
   }
   @media screen and (min-width: 580px){
      width: 58%;
      margin: auto;
   }
`