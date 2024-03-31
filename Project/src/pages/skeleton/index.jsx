import React from "react";
import { SketeletonStyled } from "./style";

const SketeletonPage = ({ count }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(<SketeletonStyled key={i} />);
  }

  return <>{skeletons}</>;
};

export default SketeletonPage;
