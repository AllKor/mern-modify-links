import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()

    const [form, setForm] = useState({email: '', password: ''})

    const message = useMessage()

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value  })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})

            message(data.message)
        } catch (error) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            
            auth.login(data.token, data.userId)
            
        } catch (error) {}
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input id="email" name='email' type="text" value={form.email} onChange={changeHandler} />
                                <label className='white-text' htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password" name='password' type="password" value={form.password} onChange={changeHandler} />
                                <label className='white-text' htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button onClick={loginHandler} className="btn yellow darken-4" style={{marginRight: '10px'}}>Войти</button>
                        <button onClick={registerHandler} disabled={loading} className="btn grey lighten-1 black-text">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage