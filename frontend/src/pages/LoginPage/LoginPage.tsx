const LoginPage = () => {
    //"bg-gray-200 flex flex-col items-center justify-start min-h-screen pt-5"
    //backgroudn = grey; use flex to center item; padding 5

    //"bg-blue-500 text-white text-lg py-2 px-5 rounded-md hover:bg-blue-600 transition duration-300"
    //backgroudn = blue; text color = white; text size = lg(large); p = padding; hover effect;
    return (
        <div className="bg-gray-200 flex flex-col items-center justify-start min-h-screen pt-5">
            <h1>Welcome to Our App</h1>
            <a href="/google" className="bg-blue-500 text-white text-lg py-2 px-5 rounded-md hover:bg-blue-600 transition duration-300">Sign in with Google</a>
        </div>

    );
}

export default LoginPage;

/*
 <div className="login-container">
            <h1>Welcome to Our App</h1>
            <a href="/google"  className="login-button">Sign in with Google</a>
        </div>
*/

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