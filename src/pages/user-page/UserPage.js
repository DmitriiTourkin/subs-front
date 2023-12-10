import './styles/user-page.css';
import NavigationBar from "../../components/NavigationBar";

export default function UserPage() {
    return (
        <>
            <NavigationBar/>
        <h1>Пользовательский аккаунт</h1>
            <div className="profile">
                <img
                    src="https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D1%81%D0%BC%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-176194876.jpg"
                    alt="Фото пользователя" className="photo"/>
                    <div className="profile-container">
                        <div className="login">@pi216</div>
                        <div className="name">
                            <div className="name-word">Имя:</div>
                            <div className="name-field">Алиса</div>
                        </div>
                        <div className="surname">
                            <div className="surname-word">Фамилия:</div>
                            <div className="surname-field">Жирнова</div>
                        </div>
                        <div className="phone-number">
                            <div className="phone-number-word">Номер телефона:</div>
                            <div className="phone-number-field">89567644673</div>
                        </div>
                        <div className="birthdate">
                            <div className="birthdate-word">Дата рождения</div>
                            <div className="birthdate-field">22.02.2003</div>
                        </div>
                        <div className="email">
                            <div className="email-word">Почта:</div>
                            <div className="email-field">215804@edu.fa.ru</div>
                        </div>
                        <button className="change">Изменить профиль</button>
                    </div>
            </div>
        </>
    );
};