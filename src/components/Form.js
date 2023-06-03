import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import addBooks from '../redux/books/sendDataToApi';

function MyForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const data = {
    item_id: uuidv4(),
    title,
    author,
    category,
  };

  const handleclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addBooks(data));
    setTitle('');
    setAuthor('');
    setCategory('');
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
          <select data-testid="category-select" value={category} id="categorybtn" name="categorybtn" onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Documentary">Documentary</option>
            <option value="Thriller">Thriller</option>
            <option value="Adventure">Adventure</option>
            <option value="Romantic">Romantic</option>
          </select>
          <Button type="submit" value="Add Book" className="add-book-btn" />
        </div>
      </form>
    </>
  );
}

export default MyForm;
