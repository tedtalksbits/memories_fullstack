import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';
import './Form.css';
import Modal from '@material-ui/core/Modal'
import { Backdrop } from '@material-ui/core';
import Nav from './Nav';
import { useSelector } from 'react-redux';

import { Button, FormContainer, UploadFile, ButtonContainer } from './FormElements';

const Form = ({ currentId, setCurrentId }) => {

   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const [postData, setPostData] = useState({
      creator: '',
      title: '',
      tags: '',
      message: '',
      selectedFile: ''
   })

   const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
   const dispatch = useDispatch();

   useEffect(() => {
      if (post) {
         setPostData(post)
         handleOpen();
      }

   }, [post])

   const handleSubmit = (e) => {
      e.preventDefault();

      if (currentId) {
         dispatch(updatePost(currentId, postData));
         clear();
         handleClose();
      }
      else {
         dispatch(createPost(postData));
         clear();
         handleClose();
      }
   }
   const clear = () => {
      setCurrentId(null);
      setPostData({
         creator: '',
         title: '',
         tags: '',
         message: '',
         selectedFile: ''
      })
   }
   return (
      <div className="form-side">
         <Nav />
         <Button primary={true} onClick={handleOpen} type="button">New</Button>
         <Modal
            open={open}
            onClose={() => { handleClose(); clear(); }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
            className="modal"
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >

            <FormContainer autoComplete='off' noValidate onSubmit={handleSubmit} id="myForm">

               <div className="input">
                  <input
                     className="input__input"
                     name="creator"
                     type="text"
                     placeholder=" "
                     value={postData.creator}
                     onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                  />
                  <label htmlFor="creator" className="input__label">Creator</label>
               </div>

               <div className="input">
                  <input
                     className="input__input"
                     name="title"
                     type="text"
                     placeholder=" "
                     value={postData.title}
                     onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  />
                  <label htmlFor="title" className="input__label">Title</label>
               </div>

               <div className="input">
                  <input
                     className="input__input"
                     name="message"
                     type="text"
                     placeholder=" "
                     value={postData.message}
                     onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                  />
                  <label htmlFor="message" className="input__label">Message</label>
               </div>

               <div className="input">
                  <input
                     className="input__input"
                     name="tags"
                     type="text"
                     placeholder=" "
                     value={postData.tags}
                     onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                  />
                  <label htmlFor="tags" className="input__label">Tags</label>
               </div>
               <div className="input">
                  <input
                     className="input__input"
                     name="selectedFile"
                     type="text"
                     placeholder=" "
                     value={postData.selectedFile}
                     onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })}
                  />
                  <label htmlFor="selectedFile" className="input__label">Image Url</label>
               </div>
               or
               <UploadFile>
                  <FileBase
                     type="file"
                     multiple={false}
                     onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                  />
               </UploadFile>
               <ButtonContainer>
                  <Button primary={true} type='submit'>Submit</Button>
                  <Button primary={false} onClick={clear} type="button">Clear</Button>
               </ButtonContainer>
            </FormContainer>
         </Modal>
      </div>
   )
}

export default Form;
