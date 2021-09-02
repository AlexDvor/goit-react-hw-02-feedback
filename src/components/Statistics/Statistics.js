
// import style from './FeedBackStat.module.css'
import Notification from "../Notification";
import PropTypes from 'prop-types';

function Statistics({ good,neutral,bad,total,positivePercentage }) {
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

Statistics.propTypes = {
    good:PropTypes.number,
    number:PropTypes.number,
    bad: PropTypes.number,
    total:PropTypes.number,
    positivePercentage :PropTypes.number,
}


export default Statistics;