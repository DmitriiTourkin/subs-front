import '../../app-styles/components.css';
export default function Card(props) {
    return (
        <div className='card-wrapper app-style'>
            <div className='card-main'>
                <div className='card-data'>
                    <div className='photo card-photo'></div>
                    <h3>Нетология</h3>
                </div>
            </div>
        </div>
    )
}