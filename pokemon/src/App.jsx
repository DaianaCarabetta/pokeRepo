import Cards from "./Components/Cards/Cards";
import Detail from "./Components/Detail/Detail";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="bg-slate-900 h-max">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
