import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  $nobackground = false,
  $noborder = true,
  $noshadow = false,
  $background = "#ffff",
  $bgborder = "#000000",
  $bgtext = "#000000",
  $nohover = false,
  $bghover = "#eeeeee",
  $nobold = true,
  $size = "1rem",
  $colorhover = "#000000",

  diseable,
  onClick,
  ...reset
}) => {
  return (
    <ButtonStyled
      disabled={diseable}
      onClick={onClick}
      $nobackground={$nobackground}
      $background={$background}
      $noborder={$noborder}
      $bgborder={$bgborder}
      $noshadow={$noshadow}
      $bgtext={$bgtext}
      $nohover={$nohover}
      $bghover={$bghover}
      $nobold={$nobold}
      $size={$size}
      $colorhover={$colorhover}
      {...reset}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const handleBackground = ($nobackground, $background) => {
  if (!$nobackground) {
    return $background;
  } else {
    return "transparent";
  }
};

const handleBorder = ($noborder, $bgborder) => {
  if (!$noborder) {
    return ` 1px solid ${$bgborder}`;
  } else {
    return "none";
  }
};

const handleShadow = ($noshadow) => {
  if (!$noshadow) {
    return "0px 5px 9px -4px rgba(0,0,0,0.22)";
  } else {
    return "none";
  }
};

const handleHover = ($nohover, $bghover) => {
  if (!$nohover) {
    return ` background-color: ${$bghover} ;`;
  } else {
    return "none";
  }
};
const handleBold = ($nobold) => {
  if (!$nobold) {
    return `bold`;
  } else {
    return "none";
  }
};

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    handleBackground(props.$nobackground, props.$background)};
  border: ${(props) => handleBorder(props.$noborder, props.$bgborder)};
  box-shadow: ${(props) => handleShadow(props.$noshadow)};
  color: ${(props) => props.$bgtext};

  border-radius: 0.3rem;
  font-size: ${(props) => props.$size};
  text-align: center;
  padding: 0.4rem 0.8rem;
  transition: 0.2s all;
  cursor: pointer;
  font-weight: ${(props) => handleBold(props.$nobold)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    ${(props) => handleHover(props.$nohover, props.$bghover)}
    color: ${(props) => props.$colorhover};
  }
`;
