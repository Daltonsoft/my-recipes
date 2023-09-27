import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from "react";
import Loading from "./Loading";

export interface AuthenticationGuardProps {
  component: ComponentType;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="flex items-center justify-center h-screen max-h-full">
       <Loading />
      </div>
    ),
  });

  return <Component />;
};
