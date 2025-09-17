export default function Home() {
    return (
        <div>
            <h1>Welcome to Create.ai!</h1>
            <a href="http://localhost:8000/auth/google">
                <button>Login with Google</button>
            </a>
            <a href="http://localhost:8000/auth/github">
                <button>Login with GitHub</button>
            </a>
            <a href="http://localhost:8000/auth/facebook">
                <button>Login with Facebook</button>
            </a>
        </div>
    )
}