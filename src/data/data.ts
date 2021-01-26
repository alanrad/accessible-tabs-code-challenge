export const data = {
  appName: 'Accessible Tabs Code Challenge',
  examples: [
    {
      id: 'multiple-tab-groups',
      title: 'Multiple Tab Groups',
      description: 'Handle multiple tab groups rendered on a single page.',
      activeTab: 'react',
    },
    {
      id: 'link-to-active-tab',
      title: 'Link to Active Tab',
      description:
        'Directly link to any given tab on a page, retain active tab state with back/forward browser navigation and refresh.',
      activeTab: 'react',
    },
  ],
  tabGroup: [
    {
      id: 'react',
      label: 'React',
      content:
        "Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.",
    },
    {
      id: 'angular',
      label: 'Angular',
      content:
        'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.',
    },
    {
      id: 'ember',
      label: 'Ember',
      content:
        'An open-source JavaScript application framework, based on the model-view-controller (MVC) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.',
    },
    {
      id: 'backbone',
      label: 'Backbone',
      content:
        'Backbone JS gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.',
    },
  ],
};
