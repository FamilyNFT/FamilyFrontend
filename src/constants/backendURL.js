// we should have a staging environment that is a clone of the production environment but with a different backend, that is TODO

// Don't change this, instead look at .env.template and copy it to a .env file
const development = process.env.REACT_APP_DEVELOPMENT_MODE === "true";

// the first part of the ternary operator is the development backend, the second part is the production backend

const shopifyBackendURL = development
  ? "http://localhost:8080"
  : "https://shopifyweb3backend-production.up.railway.app";

export default shopifyBackendURL;
