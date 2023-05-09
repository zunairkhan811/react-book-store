import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/myBookSlice';

function Render({
  renderData,
}) {
  const dispatch = useDispatch();

  const removedBooks = (item_Id) => {
    dispatch(removeBook(item_Id));
  };
  return (
    <>
      {renderData.map((item) => (
        <div id={item.item_Id} key={item.item_Id}>
          <h2>{item.title}</h2>
          <p>
            By:
            <br />
            {item.author}
          </p>
          <Button value="Remove" className="remove-btn" type="button" onClick={(e) => removedBooks(e.target.parentElement.id)} />
        </div>
      ))}
    </>
  );
}

Render.propTypes = {
  renderData:
  PropTypes.array.isRequired,
};

export default Render;
