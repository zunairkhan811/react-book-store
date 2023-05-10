import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/myBookSlice';
import Button from './Button';

function MyForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const data = {
    item_Id: uuidv4(),
    title,
    author,
  };
  const handleclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addBooks(data));
  };
  return (
    <>
      <form onSubmit={handleclick}>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your Title Here..." />
        <br />
        <input type="text" id="name" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your Name Here..." />
        <br />
        <Button type="submit" value="Add Book" className="add-book-btn" />
      </form>
    </>
  );
}

export default MyForm;
