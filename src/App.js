import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

function App() {
    return (
        <>
            <Router basename="/react-food-shop-project">
                <Header/>
                <main className="container content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/category/:name" element={<Category/>}/>
                        <Route path="/meal/:id" element={<Recipe/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
