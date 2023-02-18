import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import { FiSun, FiMoon } from 'react-icons/fi'
import RegisterPage from '../pages/RegisterPage';
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from '../utils/api';
import HomePage from "../pages/HomePage";
import ArsipPage from "../pages/ArsipPage";
import LampContext from "../Context/LampContext";
import DetailPage from "../pages/DetailPage";

const ActivityApp = () => {
  const [authedUser, setAuthedUser] = React.useState(null)
  const [initializing, setInitializing] = React.useState(true)
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() =>{
    async function componentDidMount() {
      const { data } = await getUserLogged();
      setAuthedUser(data)
      setInitializing(false)
    }
    componentDidMount()

    function initialLoad(){
      if(localStorage.getItem('theme') === undefined){
        localStorage.setItem('theme', 'light')
        setTheme('light')
      }else{
        setTheme(localStorage.getItem('theme'))
      }
    }
    initialLoad()
  }, [])

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data)
  }

  function onLogout() {
    setAuthedUser(null)
    putAccessToken('');
  }

  const toggleLamp = () => {
    const targetTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme)
    localStorage.setItem('theme', targetTheme)
  };

  const lampContextValue = React.useMemo(() => {
    return document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  if (initializing) {
    return null;
  }
  if (authedUser === null) {
    return (
      <>
        <div className="container">
          <main>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
            </Routes>
          </main>
          <button className="toggle-button" onClick={toggleLamp}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
        </div>
        
      </>
    )
  }
  return (
    <>
      <LampContext.Provider value={lampContextValue}>
        <header>
          <Navigation logout={onLogout} name={authedUser.name}/>
          <button className="toggle-button" onClick={toggleLamp}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
        </header>
        <div >
          <div className="container">
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/arsip" element={<ArsipPage/>} />
                <Route path="/notes/:id" element={<DetailPage/>} />
                <Route path="/add" element={<AddPage/>} />
              </Routes>
            </main>
          </div>
        </div>
      </LampContext.Provider>
    </>
  );
}

export default ActivityApp;