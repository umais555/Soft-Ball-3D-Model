import "./App.css";
import About from "./components/About/About";
import FooterSection from "./components/FooterSection/FooterSection";
import HeroCard from "./components/HeroCard/HeroCard";
import JoinUs from "./components/JoinUs/JoinUs";
import Programs from "./components/Programs/Programs";
import Schedule from "./components/Schedule/Schedule";
import Testimonial from "./components/Testimonial/Testimonial";
import ModelSection from "./components/ModelSection/ModelSection";
function App() {
  return (
    <div className=" bg-white my-2 mx-4 rounded-lg min-h-screen pt-1 ">
      <HeroCard />
      <div className="container mx-auto ">
        <About />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Programs />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Schedule />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Testimonial />
        <hr className="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <ModelSection />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
       
        <JoinUs />
        
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
