
// import style from './FeedBackStat.module.css'

function FeedBackStat({ state, totalFeedback, positiveFeedbackPercentage } ) {
    const { good, neutral, bad } = state;
  
    return (
        <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {totalFeedback}</p>
            <p>positive feedback: {positiveFeedbackPercentage}%</p>
        
        </>
    )
}

export default FeedBackStat;