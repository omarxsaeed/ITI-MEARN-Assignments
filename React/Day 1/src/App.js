import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Greet from "./Components/Greet";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Header from "./Components/Header";

function App() {
    return (
        <div className="container border border-dark border-5 p-0 my-5">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-8">
                    <About />
                    <Education />
                    <Experience />
                </div>
                <div className="col-4 pe-4">
                    <Greet />
                    <Contact />
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default App;
