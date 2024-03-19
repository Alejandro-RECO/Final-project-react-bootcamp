import styled from 'styled-components'
import ContactsList from '../../components/layoutContent'
import './index.scss'

const OverviewPage = () => {
  return (
    <ContainerCards>
      {/* <ContactForm/> */}
      <ContactsList/>
    </ContainerCards>
  )
}

export default OverviewPage

const ContainerCards = styled.section`
  display: 'flex';
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
`