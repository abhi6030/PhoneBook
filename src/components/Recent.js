import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function Recent() {
    const contacts = useSelector(state => state.allContacts)

    return (
        <div>
            {
                contacts.map(element => {
                        return (<ContactCard name={element.name} mobile={element.mobile} id={element.id}/>)
                })
            }
        </div>
    )
}

export default Recent
