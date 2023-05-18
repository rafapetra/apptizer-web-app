import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
order: 3;
bottom: 0;
border-top: 1px solid #e6edff;
padding: 10px;
color: #ffffff;
`;

const StyledLink = styled.a`
  color: #fdcdac;
  text-decoration: underline;

  &:hover {
    color: #ffffff;
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      © Rafael Petrachini 2023 | Created by <StyledLink href="http://www.petrachini.com">Rafael Petrachini</StyledLink>
    </FooterBox>
  );
}