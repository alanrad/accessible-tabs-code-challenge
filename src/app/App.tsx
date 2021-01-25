import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// containers
import { AvailableExamples, ExampleDetails } from 'app/containers';
// components
import { ContentWrapper } from 'app/components';
// constants
import { DETAILS_ROUTE } from 'app/constants';
// utils
import { getAppData } from 'utils';
// styles
import 'styles/app.css';

export const App: FC = () => {
  const { appName, examples } = getAppData();

  return (
    <ContentWrapper appName={appName}>
      <Router>
        <Route
          exact
          path="/"
          component={(): JSX.Element => (
            <AvailableExamples examples={examples} />
          )}
        />
        <Route
          path={`/${DETAILS_ROUTE}/:id/:active`}
          component={ExampleDetails}
        />
      </Router>
    </ContentWrapper>
  );
};
