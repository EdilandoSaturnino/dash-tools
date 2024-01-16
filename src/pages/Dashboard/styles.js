import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuLinkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  box-shadow: rgb(233, 233, 231) 0px -1px 0px inset;
  left: 96px;
  width: 100%;
`;

export const StylesLink = styled.div`
  display: flex;
  align-items: center;
  background: none;
  height: 95%;
  border-bottom: 2px solid rgb(55, 53, 47);
`;

export const MenuLink = styled(Link)`
  display: flex;
  gap: 5px;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
  padding: 0.3rem;
  border-radius: 3px;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    background: rgba(55, 53, 47, 0.08);
  }
`;
