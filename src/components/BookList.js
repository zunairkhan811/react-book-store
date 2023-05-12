import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyForm from './Form';
import Render from './RenderBooks';
import { fetchData } from '../redux/books/myBookSlice';
// import Button from './Button';

const MyBookList = () => {
  const data = useSelector((state) => state.books.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // if (state.books.isLoading) {

  //   return (

  //     <>
  //     <h1>Loading...</h1>
  //     </>
  //   );
  // }
  // console.log('State', state);
  return (
    <>

      <div className="container">
        {data.map((item) => (
          <Render
            key={item.item_id}
            id={item.item_id}
            title={item.title}
            author={item.author}
          />
        ))}

        {/* <Button value='Click'
         className="add-book-btn" type='button'
          onClick={()=>dispatch(fetchData())} /> */}
        <MyForm />
      </div>

    </>
  );
};

export default MyBookList;
