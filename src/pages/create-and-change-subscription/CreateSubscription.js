
import './styles/create-sub.css'
export default function CreateSubscription() {
    return (
        <>
            <section className="subscription">
                <div className="name">Название подписки</div>
                <div className="category">
                    <div className="word">Категория</div>
                    <form>
                        <select className="category-select">
                            <option>
                                <div className="select-option">Видео-стриминг</div>
                            </option>
                            <option>Музыкальные стриминговые сервисы</option>
                            <option>Цифровые книги и аудиокниги</option>
                            <option>Новостные и информационные сервисы</option>
                            <option>Игровые сервисы</option>
                            <option> Фитнес и здоровье</option>
                            <option>Облачные услуги</option>
                            <option>Техническая поддержка и безопасность</option>
                            <option>Еда и кулинария</option>
                            <option>Профессиональное обучение и развитие</option>
                            <option>Развлечения и хобби</option>
                            <option>Семейные и детские подписки</option>
                            <option>Социальные сети и знакомства</option>
                            <option>Фото и видео редакторы</option>
                            <option>Антивирусные и защитные программы для устройств</option>
                            <option>Аренда и прокат автомобилей</option>
                            <option>Прочее</option>
                        </select>
                    </form>
                </div>
                <div className="service">
                    <div className="word">Сервис:</div>
                    <textarea className="input-field" cols="30" rows="3"></textarea></div>
                <div className="period">
                    <div className="word">Период списания:</div>
                    <form>
                        <select className="category-select">
                            <option>Раз в месяц</option>
                            <option>Раз в полгода</option>
                            <option>Раз в год</option>
                            <option>Раз в неделю</option>
                            <option> Раз в 2 недели</option>
                        </select>
                    </form>
                </div>
                <div className="next-date">
                    <div className="word">Ближайшая дата списания:</div>
                    <input type="text" className="input-field"></input>
                </div>
                <div className="amount-money">
                    <div className="word">Сумма списания:</div>
                    <input type="text" className="input-field"></input>
                </div>
                <button action="button" className="add">
                    Добавить
                </button>
            </section>
        </>
    )
}