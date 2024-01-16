import { useContext } from "react";
import { PageTitleContext } from "../components/PageTitleProvider";

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error(
      "usePageTitle deve ser usado dentro de um PageTitleProvider"
    );
  }
  return context;
};
