import {useEffect, useState} from "react";

export default function SignUp() {
    const [userData, setUsersData] = useState({
        username: '',
        phoneNumber: '',
        email: '',
        password: ''
    });

    const signUp = (event) => {
        event.preventDefault();

        const usernameValue = event.target.username.value;
        const phoneNumberValue = event.target.phoneNumber.value;
        const passwordValue = event.target.password.value;
        const emailValue = event.target.email.value;

        setUsersData({
            username: usernameValue,
            phoneNumber: phoneNumberValue,
            email: emailValue,
            password: passwordValue,
        });
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    return (
        <>
            <form onSubmit={() => signUp} className="registration">
                <h2 className="registration-title">Регистрация</h2>

                <div className="form-container">
                    <label className="name">
                        Имя пользователя:
                        <input name="username" type="text" className="name-field" placeholder="Димка"/>
                    </label>
                    <label className="phoneNumber">
                        Номер телефона:
                        <input name="phone-number" type="text" className="phone-number-field" placeholder="+79806357552"/>
                    </label>
                    <label className="email">
                        Почта:
                        <input name="email" type="text" className="email-field" placeholder="@averzhirdur"/>
                    </label>
                </div>

                <div className="password-form">
                    {/*<img src="https://www.svgrepo.com/show/216803/padlock-lock.svg" alt="замок" className="lock"/>*/}
                    <div className="password-container">
                        <label className="password1">
                            Пароль:
                            <input name="first-password" type="text" className="password1-input"/>
                        </label>
                        <label className="password2">
                            Проверка:
                            <input name="second-password" type="text" className="password2-input"/>
                        </label>
                    </div>
                </div>
                <button type="submit" className="ok">Ок</button>
            </form>
        </>
    )

}