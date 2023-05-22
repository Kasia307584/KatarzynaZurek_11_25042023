import data from "./data.json";
import { useParams } from "react-router-dom";
import Error from "./ErrorView";
import DropdownBtn from "./DropdownBtn";

export default function ProductDetailsView() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);
  if (product === undefined) {
    return <Error />;
  }

  return (
    <main className="main">
      <section className="gallery">
        <img
          src={product.pictures[0]}
          alt="appartement"
          className="gallery-img"
        />
        <div className="chevrons-wrapper">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </section>
      <section className="info">
        <div className="main-info">
          <div className="first-info">
            <h1 className="title">{product.title}</h1>
            <p className="location">{product.location}</p>
            <div className="tags">
              <ul>
                {product.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="second-info">
            <div className="host">
              <p className="host-name">{product.host.name}</p>
              <img src={product.host.picture} alt="host" className="host-img" />
            </div>
            <div className="rating">
              <i
                className={`fa-solid fa-star ${
                  product.rating >= 1 ? "star-active" : ""
                }`}
              ></i>
              <i
                className={`fa-solid fa-star ${
                  product.rating >= 2 ? "star-active" : ""
                }`}
              ></i>
              <i
                className={`fa-solid fa-star ${
                  product.rating >= 3 ? "star-active" : ""
                }`}
              ></i>
              <i
                className={`fa-solid fa-star ${
                  product.rating >= 4 ? "star-active" : ""
                }`}
              ></i>
              <i
                className={`fa-solid fa-star ${
                  product.rating >= 5 ? "star-active" : ""
                }`}
              ></i>
            </div>
          </div>
        </div>
        <div className="dropmenu-wrapper">
          <DropdownBtn
            className="dropmenu__details"
            name="Description"
            text={product.description}
          />
          <DropdownBtn
            className="dropmenu__details"
            name="Équipements"
            text={product.equipments.map((item) => (
              <li>{item}</li>
            ))}
          />
        </div>
      </section>
    </main>
  );
}
