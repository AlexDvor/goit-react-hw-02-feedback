

function Section({ text, children }) {
    return (
        <section>
            <h2>{text}</h2>
            {children}
        </section>
)
}

export default Section;