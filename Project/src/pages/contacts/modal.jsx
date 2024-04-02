import { useState } from "react";
import Button from "../../components/button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from "../../components/modal";
import { DivStyle } from "./style";
import { deletContact } from "../../api/contacts";
import { tertiary, white } from "../../UI/colors";

export const ModalDeletContact= ({item, userId, dispatch}) => {

  const [openModal, setOpenModal] = useState(false);

  // const {loading, error} = useSelector((state) => state.auth)

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  function addDefaultSrc(ev) {
    ev.target.src = "./img/user-skeleton.png";
  }


  const handleDeletContact = (id) => {
    deletContact(id, userId, dispatch);
    console.log(id);
    handleModal();
  };

  return (
    <>
      <Button
        onClick={handleModal}
        $nobackground
        $noborder={false}
        $bgtext={tertiary}
        $bgborder={tertiary}
        $nobold={true}
        $bghover={tertiary}
        $colorhover={white}
        $size="1.3rem"
      >
        <RiDeleteBin5Fill />
      </Button>
      <Modal
        open={openModal}
        isOpen={handleModal}
        title={`DELET CONTACTS ${item.name.toUpperCase()} ${item.last_name.toUpperCase()}`}
      >
        <DivStyle>
          <ul>
            <li>Name: {item.name}</li>
            <li>Last name: {item.last_name}</li>
            <li>Favorite: {item.favorite ? "Yes" : "No"}</li>
          </ul>
          <div>
            <img
              src={item.url_image}
              alt={`Image the ${item.name} ${item.last_name}`}
              onError={addDefaultSrc}
            />
          </div>
        </DivStyle>
        <Button
          onClick={() => handleDeletContact(item.id)}
          $noborder
          $bgtext={tertiary}
          // $bgborder={tertiary}
          $nobold={true}
          $bghover={tertiary}
          $colorhover={white}
          $size="1.1rem"
        >
          CONFIRM <RiDeleteBin5Fill />
        </Button>
      </Modal>
    </>
  )
}