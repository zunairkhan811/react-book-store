import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLinks from './components/Links';
import MyBookList from './components/BookList';
import MyCategory from './components/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyLinks />
        <Routes>
          <Route path="/" element={<MyBookList />} />
          <Route path="/category" element={<MyCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
