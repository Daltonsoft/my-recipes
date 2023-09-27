import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Trans } from "react-i18next";

export const ProfileScreen: React.FC = () => {
  const { user } = useAuth0();
  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <section className='container h-full w-full'>
        <h1 id='page-title' className='content__title'>
          <Trans i18nKey='pages.profile.title'>Profile Page</Trans>
        </h1>
        <div className='content__body'>something</div>
      </section>
    </PageLayout>
  );
};
