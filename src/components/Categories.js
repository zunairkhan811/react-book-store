import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import fetchData from '../redux/books/fetchApi';

const MyCategory = () => {
  const state = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, state.data.length]);
  const uniqueNames = {};
  state.data.forEach((item) => {
    uniqueNames[item.category] = true;
  });
  const uniqueArray = Object.keys(uniqueNames);

  return (
    <>
      <div className="category-container">
        <ul className="">
          {uniqueArray.map((item) => (
            <li role="presentation" key={item} onClick={() => navigate(`/category/${item}`)}>{item}</li>
          ))}
        </ul>

      </div>
    </>
  );
};
export default MyCategory;
