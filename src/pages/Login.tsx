export default function login() {
    return (
        <>
            <h1 className="text-center">Login</h1>
            <div className="container d-flex justify-content-center">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control mb-2" id="loginUsername" placeholder="Username..." />
                        <input type="password" className="form-control mb-2" id="loginPassword" placeholder="Password..." />
                        <button type="submit" className="btn btn-dark w-100 mb-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
