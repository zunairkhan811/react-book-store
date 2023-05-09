import { useSelector } from 'react-redux';
import MyForm from './Form';
import Render from './RenderBooks';

const MyBookList = () => {
  const data = useSelector((state) => state.books.myBooks);

  return (
    <>

      <div className="container">
        <Render renderData={data} />
        <MyForm />
      </div>
    </>
  );
};

export default MyBookList;
