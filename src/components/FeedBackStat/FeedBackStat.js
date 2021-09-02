
// import style from './FeedBackStat.module.css'

function FeedBackStat({ state, onCountTotalFeedback }) {
    const { good, neutral, bad } = state;
  
    return (
        <>
            <h3>statistics</h3>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {onCountTotalFeedback()}</p>
            <p>positive feedback:</p>
        
        </>
    )
}

export default FeedBackStat;