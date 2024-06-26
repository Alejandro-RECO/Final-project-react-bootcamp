import styled from "styled-components"
import { primary } from "../../UI/colors"

export const LayoutContentStyled = styled.section`
  padding: 3rem;
  width: 1500px;
   .title{
    font-size:2.6rem;
    font-weight: 400;
    font-stretch: expanded;
    white-space: nowrap;

    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    gap: 40px;
     span{
      border-bottom: 3px solid ${primary} ;
      width: 100%;
     }
   }
   .cards-content{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 40px;
   }
`
export const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

`
