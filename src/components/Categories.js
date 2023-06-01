import { useSelector } from "react-redux";
const MyCategory = () => {
  const state = useSelector((state)=>state.books);

  return(
    <>
      <div className="category-btn">
        <ul>
          {state.data.map((item)=>(
            <li>{item.category}</li>
          ))}
        </ul>
        
      </div>
    </>
  )
  
}
  
;

export default MyCategory;
