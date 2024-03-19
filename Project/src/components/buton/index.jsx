import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  noBackground = false,
  noBorder = true,
  noShadow = false,
  background = "#ffff",
  BgBorder = "#000000",
  BgText = "#000000",
  noHover = false,
  BgHover = '#eeeeee',

  onClick
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      noBackground={noBackground}
      background={background}
      noBorder={noBorder}
      BgBorder={BgBorder}
      noShadow={noShadow}
      BgText={BgText}
      noHover={noHover}
      BgHover={BgHover}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const handleBackground = (noBackground, background) => {
  if (!noBackground) {
    return background;
  } else {
    return "transparent";
  }
};

const handleBorder = (noBorder, BgBorder) => {
  if (!noBorder) {
    return ` 1px solid ${BgBorder}`;
  } else {
    return "none";
  }
};

const handleShadow = (noShadow) => {
  if (!noShadow) {
    return '0px 5px 9px -4px rgba(0,0,0,0.22)';
  } else {
    return 'none';
  }
};

const handleHover = (noHover, BgHover) => {
  if(!noHover) {
    return ` background-color: ${BgHover} ;`
  }else{
    return 'none'
  }
}

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    handleBackground(props.noBackground, props.background)};
  border: ${(props) => handleBorder(props.noBorder, props.BgBorder)};
  box-shadow: ${(props) => handleShadow(props.noShadow)};
  color: ${(props) => props.BgText};

  border-radius: .3rem;
  font-size: 1rem;
  text-align: center;
  padding:.4rem .8rem;
  transition: .2s all;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;


  &:hover{
    ${(props) => handleHover(props.noHover, props.BgHover)}
  }
`;
