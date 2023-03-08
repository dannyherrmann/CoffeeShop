import React, { useState, useEffect } from 'react';
import { BeanVariety } from './BeanVariety';

const ShowBeans = () => {

    const [beans, setBeans] = useState([]);
    const [showVarieties, setShowVarieties] = useState(false);

    useEffect(() => {
        fetch('beanvariety')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setBeans(data);
            })
    }, [])

    return (
        <main>
            <button id="run-button" onClick={() => { setShowVarieties(true) }}>Show Bean Varieties</button><br></br>
            {
                showVarieties ? (
                    <>
                        <button id="hide-button" onClick={() => { setShowVarieties(false) }}>Hide Bean Varieties</button>
                        <article className="varieties">
                            {
                                beans.map(bean => {
                                    return <BeanVariety
                                        key={bean.id}
                                        beanName={bean.name}
                                        notes={bean.notes}
                                        region={bean.region}/>
                                })
                            }
                        </article>
                    </>
                ) : <></>}
            
        </main>
    )
}

export default ShowBeans;