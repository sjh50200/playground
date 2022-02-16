import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import * as svg from "./svg";

export type IconTypes = keyof typeof svg;

type IconProps = {
  name: IconTypes;
  hover?: boolean;
};

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, hover = false } = props;
  switch (name) {
    case "Like":
      return <StyledLike state={state} hover={hover} />;
    default:
      return null;
  }
};

export default Icon;

const StyledLike = styled(svg.Like)<{ hover: boolean; state: string }>`
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        cursor: pointer;
        path {
          fill: #86de8a;
        }
      }
    `}
  path {
    fill: black;
  }
`;
