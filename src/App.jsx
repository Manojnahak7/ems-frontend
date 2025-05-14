import "./App.css";
import { ListEmployee } from "./components/ListEmployee";
import { AddEmployee } from "./components/AddEmployee";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UpdateEmployee } from "./components/UpdateEmployee";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employees" element={<ListEmployee />}></Route>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          <Route
            path="/update-employee/:id"
            element={<UpdateEmployee />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
