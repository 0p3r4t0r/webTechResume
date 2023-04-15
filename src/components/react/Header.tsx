import React from "react";
import type { HeaderProps } from "../shared/HeaderProps";

export const Header = ({ yourName, yourTitle }: HeaderProps) => (
  <div>
    <h1>{yourName}</h1>
    <h2>{yourTitle}</h2>
  </div>
);
