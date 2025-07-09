import './App.css';
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import TopBrands from "./sections/top_restaurants_glovo";
import AnythingDelivered from './sections/AnythingDelivered';
import Countires from './sections/countries';
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
       <TopBrands />
        <AnythingDelivered />
        <Countires/>
    </div>
  );
}
