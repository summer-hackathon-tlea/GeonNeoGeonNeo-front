import './styles/styles.css'
import './styles/all.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/OurWith/Main";
import { WithDetail } from "./pages/OurWith/WithDetail";
import { Write } from "./pages/MakeWith/Write";
import { Login } from "./Auth/Login";
import { MyMain } from './pages/MyWith/Main'
import { Setting } from './pages/Setting/Setting';

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/ourwith" element={<Main />} />
          <Route path="/ourwith/:id" element={<WithDetail />} />
          <Route path="/makewith" element={<Write />}/>
          <Route path='/mywith' element={<MyMain />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
