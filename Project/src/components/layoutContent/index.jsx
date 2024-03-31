import React from 'react'
import { CenterDiv, LayoutContentStyled } from './style'

const LayoutContent = ({children, title}) => {
  return (
    <CenterDiv>
      <LayoutContentStyled>
        <h2 className='title'>{title} <span/></h2>
        <div className='cards-content'>
          {children}
        </div>
      </LayoutContentStyled>
    </CenterDiv>
  )
}

export default LayoutContent
