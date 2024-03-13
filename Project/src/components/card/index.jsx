import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div>
      <img src={contact.image_utl} alt={contact.name} />
      <h1>{contact.name}</h1>
      <p>{contact.name}</p>
      <button>
        {
          contact.favorite ? 'Corazon' : 'Cancel'
        }
      </button>
    </div>
  )
}

export default ContactCard
