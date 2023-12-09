import {useState} from "react";
import '../app-styles/components.css'

export default function ProfileNavigation() {
    const [clicked, setClicked] = useState(false);
    const userPhoto = ''; //получаю фото из общего состояния контекста


    const optionHandler = (event, optionString) => {
        event.preventDefault();
    }
    return (
        <>
            <div className='profile-nagivator-wrapper flex-item'>
                <select>
                    <option onClick={(event) => optionHandler('profile')}>Мой профиль</option>
                    <option onClick={(event) => optionHandler('questions')}>Вопросы и ответы</option>
                    <option onClick={(event) => optionHandler('logout')}>Выйти</option>
                </select>
            </div>
        </>
    )

}