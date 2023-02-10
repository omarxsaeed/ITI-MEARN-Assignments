import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
// import Alert from "react-bootstrap/Alert";

function Login() {
    const SignupSchema = yup.object().shape({
        fullName: yup.string().min(2, "Too Short").max(50, "Too Long").required("Required!"),
        email: yup.string().email("Invalid email").required("Required!"),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: SignupSchema,

        onSubmit: (values) => {
            toast.info(`Hey ${values.fullName}! you just registered with email : ${values.email}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={formik.handleSubmit}>
                <div>
                    <ToastContainer />
                </div>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                        onFocus={(e) => {
                            e.target.style.border = "1px solid red";
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid #ced4da";
                        }}
                        onChange={formik.handleChange}
                        name="fullName"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    <small style={{ color: "red" }}>{formik.errors.fullName}</small>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onFocus={(e) => {
                            e.target.style.border = "1px solid red";
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid #ced4da";
                        }}
                        onChange={formik.handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <small style={{ color: "red", display: "block" }}>{formik.errors.email}</small>
                </Form.Group>

                <Form.Select
                    onFocus={(e) => {
                        e.target.style.border = "1px solid red";
                        e.target.style.boxShadow = "none";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid #ced4da";
                    }}
                    className="mb-3"
                >
                    <option>Choose a City</option>
                    <option value="1">Port Said</option>
                    <option value="2">Cairo</option>
                    <option value="3">Giza</option>
                    <option value="4">Aswan</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onFocus={(e) => {
                            e.target.style.border = "1px solid red";
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid #ced4da";
                        }}
                        onChange={formik.handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <small style={{ color: "red" }}>{formik.errors.password}</small>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Login;
