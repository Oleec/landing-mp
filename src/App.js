import React from 'react';
import Banner from './components/Banner';
import Ready2Work from './components/Ready2Work';
import ServiceSlider from './components/ServiceSlider';
import FaaS from './components/FaaS';
import Footer from './components/Footer';
import TitleBanner from "./components/TitleBanner";

function App() {
    return (
        <div className="App">
            <Banner/>
            <TitleBanner/>
            <FaaS/>
            <ServiceSlider/>
            <Ready2Work/>
            <Footer/>
        </div>
    );
}

export default App; 