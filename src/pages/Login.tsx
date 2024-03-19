import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);

        // const formData = new FormData(e.currentTarget);
        // console.log(formData.get("username") + " " + formData.get("password"));
        // const user1 = Object.fromEntries(formData);
        // console.log(user1.username + " " + user1.password);
    };

    return (
        <>
            <h1 className="text-center">Login</h1>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="loginUsername"
                            placeholder="Brugernavn..."
                            value={user.username}
                            onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            id="loginPassword"
                            placeholder="Adgangskode..."
                            value={user.password}
                            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                        />
                        <button type="submit" className="btn btn-dark w-100 mb-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
