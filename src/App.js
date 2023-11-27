import { Route,Routes } from "react-router-dom";
//components
import Login from "./components/Login";
import Chats from "./components/Chats";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
