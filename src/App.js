import './index';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MyLinks from './components/Links';
import TodoList from './components/Todo';
import MyCategory from './components/Categories';
function App() {
  return (
    <>
    <BrowserRouter>
    <MyLinks />
    <Routes>
      <Route path="/" element={<TodoList/>}/>
      <Route path="/category" element={<MyCategory/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
