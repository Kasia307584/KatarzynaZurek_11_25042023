import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="main main__error">
      <h1 className="error-main">404</h1>
      <h2 className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <p className="homelink-wrapper">
        <Link to="/" className="homelink">
          Retour à la page d'accueil
        </Link>
      </p>
    </main>
  );
}
