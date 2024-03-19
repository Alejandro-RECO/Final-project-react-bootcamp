import React from 'react'
import styled from 'styled-components'

import { primary, secondary900 } from '../../UI/colors'

const ContactCard = ({contact, children}) => {
  return (
    <Card>
      <Img contact={contact}  src={`${contact.url_image}`} srcSet='./img/user-skeleton.png' alt={contact.name} />
      <h2>{contact.name} {contact.last_name}</h2>
      <p>{contact.email}</p>
      {children}
    </Card>
  )
}

export default ContactCard


const Card = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0px 5px 9px -1px rgba(0,0,0,0.22);
  border-radius: .3rem;
  letter-spacing: -.2px;

  h2{
    font-weight: bold;
    font-size: 1.2rem;
    color: ${secondary900};
  }
  p{
    font-size: 1.1rem;
    color: #757575;
    padding-bottom: 30px;
    margin-bottom: 10px;
    width: 90%;
    border-bottom: 2px solid #d1d1d1;
    text-align: center;
  }

  /* button{
    border: 1px solid #c90000;
    border-radius: 0.3rem;
    padding: 0.3rem .6rem;
    color: #c90000;
    text-transform: uppercase;
    font-size: .9rem;
    letter-spacing: 1px;
   

    span :first-child{
      font-size: 1.5rem;
    }
  } */
`
const Img = styled.img`
  height: 140px;
  width: 140px;
  border: ${(props) => (props.contact.favorite ? `5px solid ${primary}` : '')};
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;