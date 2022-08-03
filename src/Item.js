import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="item">
      <img src={hero} alt={name} className="image" />
      <h2>{name}</h2>
      <h3>{`${animal} — ${breed} — ${location}`}</h3>
    </Link>
  );
};

export default Pet;
