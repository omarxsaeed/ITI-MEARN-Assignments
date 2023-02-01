import logo from "../logo.svg";
function Greet() {
    return (
        <div>
            <img src={logo} alt="react" />
            <h1 className="text-uppercase text-center fs-1 my-4">Hello</h1>
        </div>
    );
}

export default Greet;
