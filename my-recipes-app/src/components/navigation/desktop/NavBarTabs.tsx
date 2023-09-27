import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarTab } from "./NavBarTab";
import { useTranslation } from "react-i18next";

export const NavBarTabs: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    <div className='nav-bar__tabs'>
      <NavBarTab path='/' label={t("navigation.routes.home")} />
      {isAuthenticated && (
        <>
          <NavBarTab path='/profile' label={t("navigation.routes.profile")} />
        </>
      )}
    </div>
  );
};
