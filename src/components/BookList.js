import { useSelector } from 'react-redux';
import MyForm from './Form';
import Render from './RenderBooks';

const MyBookList = () => {
  const data = useSelector((state) => state.books.myBooks);

  return (
    <>

      <div className="container">
        {data.map((item) => (
          <Render
            key={item.item_Id}
            id={item.item_Id}
            title={item.title}
            author={item.author}
          />
        ))}

        <MyForm />
      </div>
    </>
  );
};

export default MyBookList;
