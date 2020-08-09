import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import baseURL from './_helper/baseUrl';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

function App() {
  const [posts, setPosts] = useState([]);
  const [child, setChild] = useState(null)

  useEffect(() => {
    onConnectHandler();
  }, [])

  // Connect to api
  const onConnectHandler = () => {
    axios.get(baseURL, { withCredentials: true }).then(res => {
      // then get the Main-page
      setChild(<Main posts={res.data} updatePage={onConnectHandler} />)

    }, err => {
      // if status is 401, not logged-in, show login-form
      setChild(<Login loginHandler={data => onLoginRegisterHandler(data)} registerHandler={data => onLoginRegisterHandler(data)} />)
    })
  }

  // Login function
  const onLoginRegisterHandler = data => {
    fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content': 'application/json' },
    }).then(res => {
      // was login not sucessfull?
      if (res.status === 401 || res.status === 500) {
        // do something
        console.log(res.status)
      } else {
        // reconnec to api
        onConnectHandler();
      }
    })
  }

  return (
    <div className="App">
      {child}
    </div>
  );
}

export default App;
