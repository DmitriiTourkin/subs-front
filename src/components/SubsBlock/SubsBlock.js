import ContentStrip from "./ContentStrip";

export default function SubsBlock({title}) {
    return (
        <div className='subscription-block'>
            <h1>{title}</h1>
            <ContentStrip/>
        </div>
    )
}