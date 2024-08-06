import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={client_id}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
