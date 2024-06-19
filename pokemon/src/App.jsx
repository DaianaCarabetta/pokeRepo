import Cards from "./Components/Cards/Cards";
import Detail from "./Components/Detail/Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/detail/:name" element={<Detail />} />
    </Routes>
  );
}

export default App;
