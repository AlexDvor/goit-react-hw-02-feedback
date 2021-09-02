
import PropTypes from 'prop-types';

function Section({ text, children }) {
    return (
        <section>
            <h2>{text}</h2>
            {children}
        </section>
)
}

Section.propTypes = {
    text:PropTypes.string,
}

export default Section;