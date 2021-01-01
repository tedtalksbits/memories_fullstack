import './App.css';
import Form from './components/Form';
import Posts from './components/Posts';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getPosts } from './actions/posts';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <div className="app">
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
