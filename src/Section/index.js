import "./style.css";

const Section = ({ header, extraHeaderContent, body }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header"> {header} </h2>
            {extraHeaderContent}
        </div>

        <section className="section__body">

            {body}
        </section>
    </section>
);

export default Section;