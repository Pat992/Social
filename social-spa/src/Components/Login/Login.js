import React, { useState } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';

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
        <Card
            cardHeader={
                <h1 id="login-title">{isLogin ? 'LOGIN' : 'REGISTER'}</h1>
            }
            cardBody={
                <form onSubmit={onSubmitHandler} className={classes.Form}>
                    <Input type="text" value={userName} setValue={setUserName}>Name:</Input>
                    <Input type="email" value={email} setValue={setEmail} hidden={isLogin}>Email:</Input>
                    <Input type="email" value={repeatEmail} setValue={setRepeatEmail} hidden={isLogin}>Repeat Email:</Input>
                    <Input type="password" value={password} setValue={setPassword}>Password:</Input>
                    <Input type="password" value={repeatPassword} setValue={setRepeatPassword} hidden={isLogin}>Repeat Password:</Input>
                    <div className={classes.ButtonGroup}>
                        <Button type="submit" styling="main">SUBMIT</Button>
                        <Button type="button" styling="secondary" onClick={() => setIsLogin(() => !isLogin)}>{isLogin ? 'REGISTER' : 'LOGIN'}</Button>
                    </div>
                </form>
            }
        />
    )
}

export default Login;
