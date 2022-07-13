import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/OurWith/Main";
import './styles/styles.css'

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourwith" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
