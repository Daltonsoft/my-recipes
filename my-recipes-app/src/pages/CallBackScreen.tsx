import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Trans } from "react-i18next";

export const CallBackScreen: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <PageLayout>
        <div className='content-layout'>
          <h1 id='page-title' className='content__title'>
            <Trans i18nKey='pages.callback.errorMessage'>Error</Trans>
          </h1>
          <div className='content__body'>
            <p id='page-description'>
              <span>{error.message}</span>
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <></>
    </PageLayout>
  );
};
