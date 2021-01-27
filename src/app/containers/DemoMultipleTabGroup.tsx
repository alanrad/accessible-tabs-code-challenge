import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import { TabGroup } from 'app/components';
// interfaces
import { ItabContent } from 'app/interfaces';

interface IdisplayDetails {
  description: string;
  tabs: ItabContent[];
}

export const DemoMultipleTabGroup: FC<IdisplayDetails> = ({
  description,
  tabs,
}) => {
  const goBackLinkLabel = '« Go Back';
  const multipleTabs = ['Tab Group One', 'Tab Group Two', 'Tab Group Three'];

  return (
    <div className="example-details">
      <p>{description}</p>
      <Link to={`/`}>{goBackLinkLabel}</Link>
      {multipleTabs.map((title, index) => (
        <section key={index}>
          <h2 className="example-title">{title}</h2>
          <div id={`tab-group-${index}`}>
            <TabGroup label="JS Frameworks" tabs={tabs} />
          </div>
        </section>
      ))}
    </div>
  );
};
