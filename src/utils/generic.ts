// constants
import { DETAILS_ROUTE } from 'app/constants';

export const exampleLink = (itemId: string, activeTab: string): string => {
  return `${DETAILS_ROUTE}/${itemId}/${activeTab}`;
};
