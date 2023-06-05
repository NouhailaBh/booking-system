import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };

  const handleSendCode = async (e) => {
    e.preventDefault();

    try {
      // Envoyer la requête POST pour vérifier l'e-mail et envoyer le code
      const response = await axios.post("/auth/forgotPassword", {email} );

      console.log(response.data); // Gérer la réponse de l'API backend en conséquence

      setIsCodeSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    try {
      // Envoyer la requête POST pour vérifier le code de réinitialisation
      const response = await axios.post("/auth/verifyCode", { email, code });

      console.log(response.data); // Gérer la réponse de l'API backend en conséquence

      // Rediriger l'utilisateur vers la page de réinitialisation du mot de passe
      // lorsque le code de vérification est correct
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isCodeSent ? (
        <div>
          <h2>Mot de passe oublié</h2>
          <form onSubmit={handleSendCode}>
            <input type="email" value={email} onChange={handleChangeEmail} placeholder="Adresse e-mail" />
            <button type="submit">Envoyer le code de vérification</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Code de vérification</h2>
          <form onSubmit={handleVerifyCode}>
            <input type="text" value={code} onChange={handleChangeCode} placeholder="Code de vérification" />
            <button type="submit">Vérifier le code</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
