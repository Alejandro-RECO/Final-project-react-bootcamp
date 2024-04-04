import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "./styles";

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
  type,

  diseable,
  onClick,
  ...reset
}) => {
  return (
    <ButtonStyled
      type={type}
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
