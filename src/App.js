import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/NavBar";
import Home from "./pages/Home";
import ViewUser from "./anime/ViewAnime";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/viewanime/:id" element={<ViewUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
