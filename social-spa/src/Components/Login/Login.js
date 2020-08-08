import React, { useState } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button'

const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // is user currently on login-form?
        if (isLogin) {
            const data = {
                "login": {
                    "name": userName,
                    "password": password
                }
            }
            props.loginHandler(data);
        } else {
            // Else, they want to register
            const data = {
                "register": {
                    "name": userName,
                    "email": email,
                    "password": password
                }
            }
            props.registerHandler(data)
        }
    }
    return (
        <section className="login main-form">
            <div className="mainColor">
                <div className="post-title">
                    <h1 id="login-title">Login</h1>
                </div>
            </div>
            <form onSubmit={onSubmitHandler} >
                <Input type="text" value={userName} setValue={setUserName}>Name:</Input>
                <Input type="email" value={email} setValue={setEmail}>Email:</Input>
                <Input type="email" value={repeatEmail} setValue={setRepeatEmail}>Repeat Email:</Input>
                <Input type="password" value={password} setValue={setPassword}>Password:</Input>
                <Input type="password" value={repeatPassword} setValue={setRepeatPassword}>Repeat Password:</Input>
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={() => setIsLogin(() => !isLogin)}>{isLogin ? 'Register' : 'Login'}</Button>
            </form>
        </section >
    )
}

export default Login;
