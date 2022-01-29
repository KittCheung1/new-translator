import './App.css';
import Login from "./View/Login"
import Translator from "./View/Translator";
import Profile from "./View/Profile"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserProvider from "./components/Context/UserContext"
import WordsProvider from "./components/Context/WordsContext"

function App() {
  return (
    <UserProvider>
      <WordsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/translator" element={<Translator />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
      </WordsProvider>
    </UserProvider>
  );
}

export default App;
