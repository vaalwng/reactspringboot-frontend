import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import AddAnime from "./anime/AddAnime";
import EditAnime from "./anime/EditAnime";
import ViewAnime from "./anime/ViewAnime";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/addanime" element={<AddAnime />} />
                    <Route exact path="/editanime/:id" element={<EditAnime />} />
                    <Route exact path="/viewanime/:id" element={<ViewAnime />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
