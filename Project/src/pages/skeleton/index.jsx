import React from 'react'
import styled, { keyframes } from 'styled-components'

const SketeletonPage = ({ count }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(<SketeletonStyled key={i} />);
  }

  return <>{skeletons}</>;
};

export default SketeletonPage

const skeletonAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const SketeletonStyled = styled.div`
  width: 320px;
  height: 320px;
  /* background-color: #e1e1e1; */
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(228, 228, 228, 0.066), rgba(213, 213, 213, 0.308), rgba(228, 228, 228, 0.066));

    animation: ${skeletonAnimation} 1.5s linear infinite;
  }
`;