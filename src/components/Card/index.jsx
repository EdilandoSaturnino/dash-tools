import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardTitle } from "./styles";

const Card = ({ name, path }) => {
  let navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(path)}>
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
