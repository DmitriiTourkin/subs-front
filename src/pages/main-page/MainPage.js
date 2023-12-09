import {useState} from "react";
import SignUp from "./SignIn";
import SignIn from "./SignUp";

import './styles/main-page.css';

export default function MainPage(){
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <div className="check">
                <div className="check-text">следите за своими подписками</div>
            </div>
            <div className="call">
                <div className="call-heading">Заполняйте данные о подписке</div>
                <div className="call-text">
                    <ul className="parameters">
                        <li>формат списания</li>
                        <li>сумма платежа</li>
                        <li>платформа</li>
                    </ul>
                </div>
            </div>


            <section className="categories">
                <div className="youtube-music">
                    <div className="category-title">YouTube Music</div>
                    <div className="category-type">Категория:     музыка</div>
                    <div className="category-date">Сл. платёж: 18 ноября, 2023</div>
                    <div className="category-amount">Сумма: 5 999</div>
                </div>
                <div className="spotify">
                    <div className="category-title">Spotify</div>
                    <div className="category-type">Категория:     музыка</div>
                    <div className="category-date">Сл. платёж: 22 февраля, 2024</div>
                    <div className="category-amount">Сумма: 679</div>
                </div>
                <div className="netology">
                    <div className="category-title">Нетология</div>
                    <div className="category-type">Категория:     образование</div>
                    <div className="category-date">Сл. платёж: 10 ноября, 2023</div>
                    <div className="category-amount">Сумма: 8200</div>
                </div>
                <div className="microsoft-teams">
                    <div className="category-title">Microsoft-teams</div>
                    <div className="category-type">Категория:     коммуникации</div>
                    <div className="category-date">Сл. платёж: 9 февраля, 2023</div>
                    <div className="category-amount">Сумма: 2590</div>
                </div>
            </section>


            <div className="groups">
                <div className="groups-container">
                    <div className="education">образование</div>
                    <div className="music-services">музыкальные сервисы</div>
                    <div className="financial-operations">финансовые операции</div>
                </div>
                <div className="groups-container">
                    <div className="groups-title">Группируйте их по категориям</div>
                    <div className="groups-text">музыка, образование, финансы</div>
                </div>
            </div>

            <h1 className="pre-form">Самое время начать</h1>

            <button type="button" className="join" onClick={() => setSignUp(false)}>Войти</button>
            <button type="button" className="sign-in" onClick={() => setSignUp(true)}>Зарегистрироваться</button>
            {signUp ? <SignIn/> : <SignUp/>}
        </>
    );
}