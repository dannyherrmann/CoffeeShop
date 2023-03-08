import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const BeanForm = () => {

    const [bean, update] = useState({
        name: "",
        region: "",
        notes: ""
    })

    const handleChange = (evt) => {
        const copy = { ...bean }
        copy.name = evt.target.value
        update(copy)
    };

    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const beanToSendToAPI = {
            name: bean.name,
            region: bean.region,
            notes: bean.notes
        }

        const sendData = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(beanToSendToAPI)
            }
            const response = await fetch('beanvariety', options)
            await response.json()
            navigate("/show-beans")
        }
        sendData()
    }

    return (
        <form>
            <h2>Bean Form</h2>
            <fieldset>
                <div>
                    <label>Bean Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="bean-input"
                        placeholder="name of the bean"
                        value={bean.name}
                        onChange={
                            (event) => {
                                const copy = { ...bean }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Bean Region:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="bean-region-input"
                        placeholder="region of the bean"
                        value={bean.region}
                        onChange={
                            (event) => {
                                const copy = { ...bean }
                                copy.region = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Bean Notes:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="bean-notes-input"
                        placeholder="any notes"
                        value={bean.notes}
                        onChange={
                            (event) => {
                                const copy = { ...bean }
                                copy.notes = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit-button">           
                Save Bean
            </button>
        </form>
        )
}