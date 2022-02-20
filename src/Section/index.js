import "./style.css";

const Section = ({header, extraHeaderContent, body}) => (
    <section className="section">
        <h2 className="section__header">
            {header}
            {extraHeaderContent}
        </h2>
        <section className="section__body">

            {body}
        </section>
    </section>
);

export default Section;