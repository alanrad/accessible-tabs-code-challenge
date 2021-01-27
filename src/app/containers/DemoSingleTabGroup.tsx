import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import { TabGroup } from 'app/components';
// interfaces
import { ItabContent } from 'app/interfaces';

interface IdisplayDetails {
  description: string;
  tabs: ItabContent[];
  activeTab: string;
}

export const DemoSingleTabGroup: FC<IdisplayDetails> = ({
  description,
  tabs,
  activeTab,
}) => {
  const goBackLinkLabel = '« Go Back';
  const onTabSelected = (newTabId: string): void => {
    // a simple function to push state to history
    window.history.pushState(null, '', newTabId);
  };

  return (
    <div className="example-details">
      <p className="title">{description}</p>
      <Link to={`/`}>{goBackLinkLabel}</Link>
      <section>
        <h2 className="example-title">Tab Group</h2>
        <div id="tab-1">
          <TabGroup
            label="JS Frameworks"
            tabs={tabs}
            activeTab={activeTab}
            onTabSelected={onTabSelected}
          />
        </div>
      </section>
    </div>
  );
};
