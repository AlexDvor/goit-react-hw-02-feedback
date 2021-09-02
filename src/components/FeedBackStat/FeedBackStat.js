
// import style from './FeedBackStat.module.css'

function FeedBackStat({ state }) {
  
    return (
        <>
            <h3>statistics</h3>
            <p>good:{state.good}</p>
            <p>neutral:{state.neutral}</p>
            <p>bad:{state.bad}</p>
        </>
    )
}

export default FeedBackStat;