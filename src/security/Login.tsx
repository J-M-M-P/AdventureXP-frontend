import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { User } from "../service/authFacade";

export default function Login() {
    const [user, setUser] = useState({ username: "", password: "" });

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const [err, setErr] = useState(null);

    const from = location.state?.from?.pathname || "/";

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get("username"));
        const user = Object.fromEntries(formData) as unknown as User;
        console.log(user);

        setErr(null);
        console.log(err);
        // alert("Login: " + JSON.stringify(user));
        //return;
        auth.signIn(user) //Call the signIn function in the authFacade with the user object
            .then(() => {
                navigate(from, { replace: true }); //Navigate back to where the user came from
            })
            .catch((err) => {
                setErr(err);
            });
    }

    return (
        <>
            <h1 className="text-center">Login</h1>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            className="form-control mb-2"
                            id="username"
                            placeholder="Brugernavn..."
                            value={user.username}
                            onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
                        />
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            name="password"
                            className="form-control mb-2"
                            id="password"
                            placeholder="Adgangskode..."
                            value={user.password}
                            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 mb-2">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
