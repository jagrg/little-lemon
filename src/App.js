// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Hero />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
