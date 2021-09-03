
import {Buttons} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

function FeedbackOptions({onLeaveFeedback}) {
    return (
        <>
            <Buttons onClick={()=>onLeaveFeedback("good")}>good</Buttons>
            <Buttons onClick={()=>onLeaveFeedback("neutral")}>neutral</Buttons>
            <Buttons onClick={() =>onLeaveFeedback("bad")}>bad</Buttons>
        </>
    )
}


FeedbackOptions.propTypes = {
onLeaveFeedback:PropTypes.func,
}

export default FeedbackOptions;