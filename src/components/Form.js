import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import addBooks from '../redux/books/sendDataToApi';

function MyForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const data = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Science-fiction',
  };

  const handleclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addBooks(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form className="form-container" onSubmit={handleclick}>
        <div className="form-heading"><h1>ADD NEW BOOK</h1></div>
        <div className="input-container">
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" required />
          <br />
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
          <br />
          <select id="category" name="category">
            <option value="select">Select Category</option>
            <option value="fiction">Science Fiction</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="documentary">Documentary</option>
            <option value="thriller">Thriller</option>
            <option value="adventure">Adventure</option>
            <option value="romantic">Romantic</option>
          </select>
          <Button type="submit" value="Add Book" className="add-book-btn" />
        </div>
      </form>
    </>
  );
}

export default MyForm;
