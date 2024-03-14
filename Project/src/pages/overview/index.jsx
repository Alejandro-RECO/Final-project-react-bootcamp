import ContactForm from '../../components/form'
import ContactsList from '../../components/layoutContent'
import { useContact } from '../../context/ContactContext'
import './index.scss'

const OverviewPage = () => {
  return (
    <div>
      Overview
      {/* <ContactForm/> */}
      <ContactsList/>
    </div>
  )
}

export default OverviewPage
