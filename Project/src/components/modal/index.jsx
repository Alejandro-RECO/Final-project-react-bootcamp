import Button from '../button'
import { RiCloseLine } from "react-icons/ri";
import { ContainerModal, HeaderModal, Overlay } from './style';


const Modal = ({children, open, isOpen, title}) => {


  return (
    <>
    {
      open && 
      <Overlay>
        <ContainerModal>
            <HeaderModal>
              <h3>{title}</h3>
              <Button
                onClick={isOpen}
              >
                <RiCloseLine/>
              </Button>
            </HeaderModal>
            {children}
        </ContainerModal>
      </Overlay>
    }
    </>
  )
}

export default Modal

