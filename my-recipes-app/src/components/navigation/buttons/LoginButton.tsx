import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button className='md:dark:disabled:focus:hover:bg-gray-400' onClick={handleLogin}>
      <Trans i18nKey='navigation.buttons.login'>Log In</Trans>
    </button>
  );
};
