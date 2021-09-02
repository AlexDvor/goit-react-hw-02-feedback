
// import style from './FeedBackStat.module.css'
import Notification from "../Notification";

function FeedBackStat({ good,neutral,bad,total,positivePercentage }) {
    return (
        <>
            {total > 0 ? <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
            <p>positive feedback: {positivePercentage}%</p>
            </> : <Notification message="No feedback given"></Notification>}
        </>
    )
}

export default FeedBackStat;