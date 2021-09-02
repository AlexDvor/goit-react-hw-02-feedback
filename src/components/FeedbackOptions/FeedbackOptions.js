
import style from './FeedbackOptions.module.css'

function FeedBackButtons({onLeaveFeedback}) {
    return (
        <>
            <button className={style.btn} onClick={()=>onLeaveFeedback("good")}>good</button>
            <button className={style.btn} onClick={()=>onLeaveFeedback("neutral")}>neutral</button>
            <button className={style.btn} onClick={() =>onLeaveFeedback("bad")}>bad</button>
            </>
    )
}

export default FeedBackButtons;