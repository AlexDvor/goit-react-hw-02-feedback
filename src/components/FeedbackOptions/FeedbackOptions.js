
import style from './FeedbackOptions.module.css'

function FeedBackButtons({updatedState}) {
    return (
        <>
        <h2>please leave feedback</h2>
            <button className={style.btn} onClick={()=>updatedState("good")}>good</button>
            <button className={style.btn} onClick={()=>updatedState("neutral")}>neutral</button>
            <button className={style.btn} onClick={() =>updatedState("bad")}>bad</button>
            </>
    )
}

export default FeedBackButtons;