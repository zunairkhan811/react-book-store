import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyForm from './Form';
import Render from './RenderBooks';
import fetchData from '../redux/books/fetchApi';

const MyBookList = () => {
  const state = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>

      <div className="container">
        {state.data.map((item) => (
          <Render
            key={item.item_id}
            id={item.item_id}
            title={item.title}
            author={item.author}
          />
        ))}
         <div className="line"></div>
        <MyForm />
      </div>

    </>
  );
};

export default MyBookList;
