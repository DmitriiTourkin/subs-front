import '../../app-styles/components.css';
import Card from "./Card";

export default function ContentStrip(props) {
    return (
        <section>
            <div className="content-data-strip app-style flex-container">
                <div className="card-block-wrapper flex-container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    )
}