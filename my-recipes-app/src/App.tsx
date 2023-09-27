import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import { ProfileScreen } from "./pages/ProfileScreen";
import { NotFoundScreen } from "./pages/NotFoundScreen";
import { CallBackScreen } from "./pages/CallBackScreen";
import Loading from "./components/Loading";

export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen max-h-full">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfileScreen} />}
      />
      <Route path="/callback" element={<CallBackScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};