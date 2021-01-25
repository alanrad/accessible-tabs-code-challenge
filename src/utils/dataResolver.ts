// data
import { data } from 'data/data';
// interfaces
import { IappData } from 'app/interfaces';

// return global data - can be consumed from anywhere in the app
export const getAppData = (): IappData => {
  const { appName, examples, tabGroup } = data;
  return {
    appName: typeof appName !== 'undefined' ? appName : '',
    examples: typeof examples !== 'undefined' ? examples : [],
    tabGroup: typeof tabGroup !== 'undefined' ? tabGroup : [],
  };
};
