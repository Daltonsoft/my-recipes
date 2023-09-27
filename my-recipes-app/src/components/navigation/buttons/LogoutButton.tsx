import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Trans } from "react-i18next";

export const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            },
        });
    };

    return (
        <button className="md:dark:disabled:focus:hover:bg-gray-400" onClick={handleLogout}>
            <Trans i18nKey='navigation.buttons.logout'>Log Out</Trans>
        </button>
    );
};
