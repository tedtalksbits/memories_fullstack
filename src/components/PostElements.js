import styled from 'styled-components';

export const Card = styled.div`
   background: #22232a;
   border-radius: 1rem;
   padding: 5px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .card-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 1rem; 

      .creator{
         color: #dcdde1;
         font-size: .8rem;
         font-weight: bold;
         white-space: nowrap;
      }
      .date{
         font-size: .65rem;
         color: #7c7f85;
      }
   }
   .tags{
      font-size: .875rem;
      padding: 0 1rem;
   }
  
`
export const CardImage = styled.img`
   object-fit: contain;
   border-radius: 1rem;

`
export const CardInfo = styled.div`
   padding: 1.5rem 1rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .title{
      font-weight: 600;
      color: #dcdde1;
   }
   .message{
      color: #7c7f85;
      line-height: 1.2;
   }
   
`
export const CardActions = styled.div`
   padding: .3rem 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: #1d1f25;
   border-radius: 0 0 1rem 1rem;

   & > * .likes{
      color: white;
      margin-left: 4px;
   }
   
`

export const DeleteModal = styled.div`
   color: white;
   padding: 2rem;
   background: #22232a;

   .del-actions{
      padding: 1rem 0;

      .small-button{
         width: 50%;
         margin: 1rem auto;
      }

      & > *{
         margin-right: 20px;
      }
   }
`
