import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Trans } from "react-i18next";

export const SignUpButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className='md:dark:disabled:focus:hover:bg-gray-400-up' onClick={handleSignUp}>
      <Trans i18nKey='navigation.buttons.signUp'>Sign Up</Trans>
    </button>
  );
};
