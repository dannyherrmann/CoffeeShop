export const BeanVariety = ({ beanName, region, notes }) => {
    return <section className="beanVariety">
        <div>
            <h1>Bean Name: {beanName}</h1>
            <h3>Region: {region}</h3>
            <h3>Notes: {notes}</h3>
        </div>
    </section>
}