import './Background.css'

export default function Background() {
    return (
        <div className="area">
            <ul className="circles">
                {Array.from({length: 10}).map((_, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    )
}
