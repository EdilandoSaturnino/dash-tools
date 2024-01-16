import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

PageTitleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
