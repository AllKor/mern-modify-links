import React from 'react'
import 'materialize-css'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/authContext';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

function App() {
  const {login, logout, token, userId, ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if(!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={
      {login, logout, token, userId, isAuth}
    } >
      <div className="container">
        <header className="App-header">
          {isAuth && <Navbar />}
          
        </header>
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
