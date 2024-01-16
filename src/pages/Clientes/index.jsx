import { useEffect } from "react";
import { usePageTitle } from "../../hooks/usePageTitle";

const Clientes = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("Clientes");
  }, [setTitle]);

  return <div>index</div>;
};

export default Clientes;
