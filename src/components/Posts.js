import React from 'react';
import styled from 'styled-components';
import Post from './Post';
const PostContainer = styled.div`

   color: white;
   width: 100%;
   gap: 2rem;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

const Posts = ({ setCurrentId, currentId }) => {
   return (
      <PostContainer>
         <Post setCurrentId={setCurrentId} currentId={currentId} />
      </PostContainer>
   )
}

export default Posts
