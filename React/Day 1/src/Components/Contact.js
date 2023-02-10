function Contact() {
    return (
        <div className="my-5">
            <h2 className="text-uppercase text-white text-center bg-dark">Contact</h2>
            <div className="d-flex gap-3 align-items-center">
                <i className="bi bi-house-fill fs-3 "></i>
                <p>634 San Antonio Rd, Mountain View, California</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <i className="bi bi-telephone-fill fs-3 "></i>
                <p>(559) 650-4949</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <i className="bi bi-globe-americas fs-3"></i>
                <p>https://www.omarsaeed.dev</p>
            </div>
        </div>
    );
}

export default Contact;
