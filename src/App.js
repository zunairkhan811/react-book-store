import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLinks from './components/Links';
import MyBookList from './components/BookList';
import MyCategory from './components/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="main-container">
            <MyLinks />
            <Routes>
              <Route path="/" element={<MyBookList />} />
              <Route path="/category" element={<MyCategory />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
