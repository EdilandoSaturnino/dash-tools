import { Outlet } from "react-router-dom";
import { LayoutContainer, Heading } from "./styles";
import { usePageTitle } from "../hooks/usePageTitle";

const DefaultLayout = () => {
  const { title } = usePageTitle();

  return (
    <LayoutContainer>
      <Heading>{title}</Heading>
      <Outlet />
    </LayoutContainer>
  );
};

export default DefaultLayout;
