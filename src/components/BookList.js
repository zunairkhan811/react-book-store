import MyForm from './Form';
import Render from './RenderBooks';

const MyBookList = () => {
  const data = [
    {
      id: 1,
      title: 'Setup React website',
      author: 'Zunair',
    },
    {
      id: 2,
      title: 'Space and the world',
      author: 'Ali',
    },
    {
      id: 3,
      title: 'Science fiction',
      author: 'Akram ',
    },
  ];
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
