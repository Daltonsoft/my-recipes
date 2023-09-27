import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SignUpButton } from "../buttons/SignUpButton";
import { LoginButton } from "../buttons/LoginButton";
import { LogoutButton } from "../buttons/LogoutButton";


export const MobileNavBarButtons: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="mobile-nav-bar__buttons">
            {!isAuthenticated && (
                <>
                    <SignUpButton />
                    <LoginButton />
                </>
            )}
            {isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    );
};
