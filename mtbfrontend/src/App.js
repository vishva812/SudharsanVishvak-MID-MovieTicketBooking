
import "./App.css"
import CardsCarousel from "./components/CardsCarousel";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import des from "./des.png";
import BookTicketForm from "./components/BookTicketForm";
import ReviewForm from "./components/ReviewForm";
import Login from "./Login";
import SignUp from "./SignUp";
import TheaterLCompo from "./components/TheaterLcompo";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: "#9C7AF5",
          height: "100vh",
          color: "white",
          backgroundImage: `url(${des})`,
          backgroundSize: "40%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          overflow: "hidden"
        }}
      >
        
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/CardsCarousel" element={<CardsCarousel />} />
          <Route path="/TheaterLCompo" element={<TheaterLCompo/>} />
          <Route path="/BookTicketForm" element={<BookTicketForm/>} />
          <Route path="/ReviewForm" element={<ReviewForm/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
