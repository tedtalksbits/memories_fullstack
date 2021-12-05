import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Fade, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Backdrop } from '@material-ui/core';
import { Button as MyButton } from './FormElements';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../actions/posts';

import { Card, CardImage, CardInfo, CardActions, DeleteModal } from './PostElements';

const Post = ({ setCurrentId }) => {

   const dispatch = useDispatch();
   const posts = useSelector((state) => state.posts);


   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   if (!posts) {
      return (
         <h1>No data</h1>
      )
   }

   return (
      <>
         {posts.map((post) => (
            <Card key={post._id}>
               <div className="card-top">
                  <span className="creator">{post.creator}</span>
                  <span className="date">{moment(post.createdAt).fromNow()}</span>
               </div>
               {post.selectedFile === '' ? <CardImage src='https://dummyimage.com/250x350/181a1a/bfbfbf.png&text=no+image+found' noImage={true} /> :

                  <CardImage src={post.selectedFile} />
               }
               <CardInfo>
                  <span className="title">{post.title}</span>
                  <span className="message">{post.message}</span>
               </CardInfo>
               <div className="tags">
                  {post.tags.map((tag) => `#${tag} `)}
               </div>
               <CardActions>
                  <Button onClick={() => dispatch(likePost(post._id))}>
                     <FavoriteIcon />
                     <span className='likes'>{post.likeCount}</span>
                  </Button>

                  <Button onClick={handleClickOpen} type="button">
                     <DeleteIcon />
                  </Button>
                  <Modal
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="simple-modal-title"
                     aria-describedby="simple-modal-description"
                     closeAfterTransition
                     className="modal"
                     BackdropComponent={Backdrop}
                     BackdropProps={{
                        timeout: 500,
                     }}
                  >
                     <Fade in={open}>
                        <DeleteModal>
                           <h3 id="title">
                              "Are you sure you want to delete this memory?"
                           </h3>
                           <div className="del-actions">
                              <MyButton
                                 onClick={handleClose}
                                 className="small-button"
                              >
                                 Cancel
                              </MyButton>

                              <MyButton
                                 autoFocus
                                 onClick={() => {
                                    dispatch(deletePost(post._id));
                                    handleClose();
                                 }}
                                 className="small-button"
                                 primary={true}
                              >
                                 Yes
                              </MyButton>
                           </div>
                        </DeleteModal>
                     </Fade>
                  </Modal>

                  <PopupState variant="popover" popupId="popup-menu">
                     {(popupState) => (
                        <>
                           <Button {...bindTrigger(popupState)} className="small-button">
                              <MoreHorizIcon />
                           </Button>
                           <Menu {...bindMenu(popupState)}>
                              <MenuItem
                                 onClick={() => {
                                    setCurrentId(post._id); popupState.close();
                                 }
                                 }
                              >
                                 Edit
                              </MenuItem>
                              <MenuItem onClick={popupState.close}>Hide</MenuItem>
                              <MenuItem onClick={popupState.close}>Save</MenuItem>
                           </Menu>
                        </>
                     )}
                  </PopupState>
               </CardActions>
            </Card>
         ))}
      </>
   )
}

export default Post
