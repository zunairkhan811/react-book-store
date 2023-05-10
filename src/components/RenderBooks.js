import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/myBookSlice';

function Render({
  id, title, author, key,
}) {
  const dispatch = useDispatch();

  const removedBooks = () => {
    dispatch(removeBook(id));
  };
  return (
    <>

      <div id={id} key={key}>
        <h2>{title}</h2>
        <p>
          By:
          <br />
          {author}
        </p>
        <Button value="Remove" className="remove-btn" type="button" onClick={removedBooks} />
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
