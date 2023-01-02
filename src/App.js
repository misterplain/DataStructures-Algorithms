import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
//screen imports
import Home from "./pages/Home";
import Notes from "./pages/notes/Notes";
import Patterns from "./pages/patterns/Patterns";
import Problems from "./pages/problems/Problems";
import Resources from "./pages/resources/Resources";

function App() {
  return (
    <Router>
      {" "}
      <div className='App'>
        <Header />
        <div>
          <Routes>
          <Route path='*' element={<Navigate replace to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/patterns' element={<Patterns />} />
          <Route path='/problems' element={<Problems />} />
          <Route path='/resources' element={<Resources />} />
          </Routes>

        </div>
        <section>
        <Outlet></Outlet>
      </section>
      </div>
    </Router>
  );
}

export default App;
