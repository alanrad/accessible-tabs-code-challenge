import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// containers
import { Examples } from 'app/containers';
// components
import { ContentWrapper } from 'app/components';
// styles
import 'styles/app.css';

export const App: FC = () => (
  <ContentWrapper appName="Accessible Tabs Code Challenge">
    <Router>
      <Redirect exact from="/" to="/tab-examples" />
      <Route default path={['/tab-examples']} component={Examples} />
    </Router>
  </ContentWrapper>
);
