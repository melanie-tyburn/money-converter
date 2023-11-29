import './Result.scss'
interface ResultProps {
    name: string;
    rate: number;
}
const Result = ({name, rate}: ResultProps) => {
    return (
        <div className="result">
            <p className="result-rate">{name}</p>
            <p className="result-name">{rate}</p>
        </div>
    )
}
export default Result