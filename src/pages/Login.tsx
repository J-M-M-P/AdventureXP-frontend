export default function login() {
    return (
        <>
            <h1 className="text-center">Login</h1>
            <div className="container d-flex justify-content-center">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control mb-2" id="loginUsername" placeholder="Username..." />
                        <input type="text" className="form-control mb-2" id="loginPassword" placeholder="Password..." />
                        <button type="button" className="btn btn-dark w-100">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
