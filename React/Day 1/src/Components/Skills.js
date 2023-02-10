function Skills() {
    return (
        <div>
            <h2 className="text-uppercase text-white text-center bg-dark">Skills</h2>
            <div className="d-flex gap-3 align-items-center justify-content-center d-flex">
                <p className="">HTML</p>
                <div className="w-100 border border-dark border-1 rounded">
                    <div className="bg-dark" style={{ height: "24px", width: "100%" }}></div>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <p>CSS</p>
                <div className="w-100 border border-dark border-1 rounded">
                    <div className="bg-dark" style={{ height: "24px", width: "100%" }}></div>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <p>Javascript</p>
                <div className="w-100 border border-dark border-1 rounded">
                    <div className="bg-dark" style={{ height: "24px", width: "90%" }}></div>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <p>Node.js</p>
                <div className="w-100 border border-dark border-1 rounded">
                    <div className="bg-dark" style={{ height: "24px", width: "70%" }}></div>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <p>React</p>
                <div className="w-100 border border-dark border-1 rounded">
                    <div className="bg-dark" style={{ height: "24px", width: "20%" }}></div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
