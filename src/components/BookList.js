import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyForm from './Form';
import Render from './RenderBooks';
import fetchData from '../redux/books/fetchApi';

const MyBookList = () => {
  const state = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { type } = useParams();
  useEffect(() => {
    if (state.data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, state.data.length]);

  if (type != null) {
    return (
      <>
        <div className="container">
          {state.data.filter((item) => item.category === type).map((item) => (
            <Render
              key={item.item_id}
              id={item.item_id}
              title={item.title}
              author={item.author}
              category={item.category}
            />
          ))}
          <div className="line" />
        </div>
      </>
    );
  }

  return (
    <>

      <div className="container">
        {state.data.map((item) => (
          <Render
            key={item.item_id}
            id={item.item_id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
        <div className="line" />
        <MyForm />
      </div>

    </>
  );
};

export default MyBookList;
