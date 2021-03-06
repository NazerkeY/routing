import { useNavigate } from "react-router";
import {Button, Form} from "react-bootstrap";

export const Login = ({ authed,  setAuthed }) => {
    const navigate = useNavigate();

    function onLogin() {
        setAuthed(true);
        navigate('/profile');
    }

    return (
        <div className="d-flex flex-column align-items-center w-auto mt-5">
        <h1>Sign in</h1>
        <div className="login-block">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onLogin}>
                Submit
            </Button>
        </Form>
        </div>
        </div>

    )
}