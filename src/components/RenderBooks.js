import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import removeBooks from '../redux/books/removeDataFromApi';

function Render({
  id, title, author, key,
}) {
  const dispatch = useDispatch();
  const removedBooks = () => {
    dispatch(removeBooks(id));
  };
  return (
    <>

      <div id={id} className="card-container" key={key}>
        <div className="info-div">
          <div className="remove-div">
            <h1>Science-Fiction</h1>
            <h2>{title}</h2>
            <p>
              {author}
            </p>
            <button type="button" className="remove-btn">Comments</button>
            <Button value="Remove" className="remove-btn" type="button" onClick={removedBooks} />
            <button type="button" className="remove-btn">Edit</button>
          </div>
          <div className="complete-div">
            <div className="oval" />
            <span>
              <p>100%</p>
              <p>Completed</p>
            </span>

          </div>

        </div>
        <div className="update-div">
          <h2>Current Chapter</h2>
          <h2>Chapter 17</h2>
          <button type="button" className="update-btn">Update Progress</button>

        </div>

      </div>

    </>
  );
}

Render.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Render;
