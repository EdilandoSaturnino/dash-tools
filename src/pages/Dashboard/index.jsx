import { useEffect } from "react";
import Card from "../../components/Card";
import { usePageTitle } from "../../hooks/usePageTitle";
import { MenuLink, MenuLinkContainer, StylesLink } from "./styles";
import { FaBeer } from "react-icons/fa";

const Dashboard = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);

  return (
    <>
      <MenuLinkContainer>
        <StylesLink>
          <MenuLink to="/">
            <FaBeer /> Menu
          </MenuLink>
        </StylesLink>
      </MenuLinkContainer>
      <div style={{ display: "flex" }}>
        <Card name="Clientes" path="/clientes" />
        <Card name="Projetos" path="/projetos" />
        <Card name="Metas" path="/metas" />
      </div>
    </>
  );
};

export default Dashboard;
