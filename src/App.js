import Navbar from "./components/Navbar";

const { default: LoginPage } = require("./pages/LoginPage");

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <LoginPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
