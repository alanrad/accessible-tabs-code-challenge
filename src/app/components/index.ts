export * from 'app/components/ContentWrapper';

// # View Components

// Are purely presentational and are concerned with how things look
// May contain both views and containers inside
// Usually have some DOM markup and styles of their own
// Often allow containment via children prop
// Have no dependencies on the rest of the app such as actions, resolvers or app state
// Don’t specify how the data is loaded or mutated
// Receive data and callbacks exclusively via props
// When they do have their own state, it’s UI state rather than data
// Are written as functional components unless they need state, lifecycle hooks, or performance optimizations
