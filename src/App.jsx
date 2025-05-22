import "./App.css";
import AboutMe from "./components/AboutMe";
import FavMusic from "./components/FavMusic";
import LinkedIn from "./components/LinkedIn";
import History from "./components/History";
import Location from "./components/Location";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] w-full md:w-[90%] lg:w-[80%] xl:w-[60%] flex flex-col md:flex-row gap-4">
        <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col gap-4">
          <AboutMe />
          <div className="h-1/3 w-full flex gap-4">
            <FavMusic />
            <LinkedIn />
          </div>
          <History />
        </div>
        <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col gap-4">
            <Location />
            <Projects />
          </div>
          <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col gap-4">
            <Certificates />
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
