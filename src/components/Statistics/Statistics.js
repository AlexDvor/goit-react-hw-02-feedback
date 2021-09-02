
// import style from './FeedBackStat.module.css'

function FeedBackStat({ good,neutral,bad,total,positivePercentage }) {
    return (
        <>
            {total > 0 && <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
            <p>positive feedback: {positivePercentage}%</p>
            </>}
            
        
        </>
    )
}

export default FeedBackStat;