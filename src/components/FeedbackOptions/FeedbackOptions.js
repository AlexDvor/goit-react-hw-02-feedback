
import style from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

function FeedbackOptions({onLeaveFeedback}) {
    return (
        <>
            <button className={style.btn} onClick={()=>onLeaveFeedback("good")}>good</button>
            <button className={style.btn} onClick={()=>onLeaveFeedback("neutral")}>neutral</button>
            <button className={style.btn} onClick={() =>onLeaveFeedback("bad")}>bad</button>
            </>
    )
}


FeedbackOptions.propTypes = {
onLeaveFeedback:PropTypes.func,
}

export default FeedbackOptions;