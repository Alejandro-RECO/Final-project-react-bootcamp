import styled from "styled-components";

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

export const ButtonStyled = styled.button`
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