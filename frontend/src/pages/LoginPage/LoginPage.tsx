import './LoginPage.css';

const LoginPage = () => {
    // const handleLogin = (event) => {
    //     // Placeholder for login logic, set loggedIn to true on successful login
    //     console.log("Login attempt..."); // Simulate login attempt
    //     setLoggedIn(true); // Set loggedIn to true for simulation purposes
    // };
    //onClick={handleLogin}
    //<button  href="/google" className="login-button">Sign in with Google</button>
    //onClick={handleLogin}
    return (
        <div className="login-container">
            <h1>Welcome to Our App</h1>
            <a href="/google"  className="login-button">Sign in with Google</a>
        </div>
    );
}

export default LoginPage;

/*
interface LoginPageProps {
    setLoggedIn: (loggedIn: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setLoggedIn }) => {
    const handleLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent default link behavior
        console.log("Login attempt..."); // Simulate login attempt
        setLoggedIn(true); // Set loggedIn to true for simulation purposes
    };

    return (
        <div className="login-container">
            <h1>Welcome to Our App</h1>
            <a href="/google" className="login-button" onClick={handleLogin}>Sign in with Google</a>
        </div>
    );
}
*/