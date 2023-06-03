import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLinks from './components/Links';
import MyBookList from './components/BookList';
import MyCategory from './components/Categories';

function App() {
  return (
    <>
      <BrowserRouter basename="react-book-store">
        <div className="main">
          <div className="main-container">
            <MyLinks />
            <Routes>
              <Route path="/" element={<MyBookList />} />
              <Route path="/category" element={<MyCategory />} />
              <Route path="/category/:type" element={<MyBookList />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
