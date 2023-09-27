import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MobileNavBarTab } from "./MobileNavBarTab";
import { useTranslation } from "react-i18next";

export interface MobileNavBarTabsProps {
    handleClick: () => void;
  }

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({
    handleClick,
}) => {
    const { isAuthenticated } = useAuth0();
    const { t } = useTranslation();
    
    return (
        <div className="mobile-nav-bar__tabs">
            <MobileNavBarTab
                path="/profile"
                label={t('navigation.routes.profile')}
                handleClick={handleClick} />
            <MobileNavBarTab
                path="/public"
                label="Public"
                handleClick={handleClick} />
            {isAuthenticated && (
                <>
                    <MobileNavBarTab
                        path="/protected"
                        label="Protected"
                        handleClick={handleClick} />
                    <MobileNavBarTab
                        path="/admin"
                        label="Admin"
                        handleClick={handleClick} />
                </>
            )}
        </div>
    );
};
