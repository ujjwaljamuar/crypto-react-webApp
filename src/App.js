import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coins" element={<Coins />} />
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/coin/:id" element={<CoinDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
