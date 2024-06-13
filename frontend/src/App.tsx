// App.jsx
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';

function App() {
    //boolean for
    //const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
