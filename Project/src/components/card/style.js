import styled from "styled-components";
import { primary, secondary900 } from '../../UI/colors'


const handleFavorite = ($favorite) =>{
  if($favorite){
    return `5px solid ${primary}`
  }else{
    return 'none'
  }
}

export const Card = styled.div`
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
  div{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 60px;
  }
`
export const Img = styled.img`
  height: 140px;
  width: 140px;
  border: ${(props) => handleFavorite(props.$favorite)};
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;