import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px 10px 10px 0;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 7px;
  width: 270px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;

  transition: all 0 duration 0.5s linear;

  &:hover {
    opacity: 1;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
`;
