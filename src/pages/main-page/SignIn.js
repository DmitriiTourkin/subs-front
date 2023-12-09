import {useEffect, useState} from "react";

export default function SignIn() {
    const [userData, setUsersData] = useState({
        username: '',
        password: ''
    });

    const signIn = (event) => {
        event.preventDefault();
        const usernameValue = event.target.username.value;
        const passwordValue = event.target.password.value;
        setUsersData({username: usernameValue.toString(), password: passwordValue.toString()});
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return (
        <>
            <form onSubmit={(event) => signIn(event)} className="registration">
                <h2 className="registration-title">Авторизация</h2>
                <div className="form-container">
                    <label className="name">
                        Имя пользователя:
                        <input name="username" type="text" className="name-field" placeholder="Димка"/>
                    </label>
                    <label className="password">
                        Пароль:
                        <input name="password" type="text" className="password-field"/>
                    </label>
                    <button type="submit" className="ok">Войти</button>
                </div>
            </form>
        </>
    );
}

