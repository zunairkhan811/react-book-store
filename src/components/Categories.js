import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyCategory = () => {
  const state = useSelector((state) => state.books);
  const navigate = useNavigate();

  return (
    <>
      <div className="category-container">
        <ul className="">
          {state.data.map((item) => (
            <li role="presentation" key={item.category} onClick={() => navigate(`/category/${item.category}`)}>{item.category}</li>
          ))}
        </ul>

      </div>
    </>
  );
};
export default MyCategory;
