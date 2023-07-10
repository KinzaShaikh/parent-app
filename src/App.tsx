import './App.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

function App() {
    return (
      <>
           <Router>
                <div className="header">
                    <NavLink to="/" className="link">
                     Home-Page
                    </NavLink>

                    <NavLink to="/submodule-one" className="link">
                        Submodule one
                    </NavLink>

                    <NavLink to="/submodule-two" className="link">
                        Submodule two
                    </NavLink>
                </div>

                {/* <h1>I am Main React App</h1> */}

                <div id="subapp-viewport1"></div>
                <div id="subapp-viewport2"></div>
            </Router>
        </>
    );
}

export default App;
