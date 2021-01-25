export * from 'app/containers/Examples';

// # Container Components

// They're concerned with how things work
// Their main purpose is to gather information from resolvers and save it in their state
// May contain both views and containers inside
// Usually don’t have any DOM markup of their own except for some wrapping divs
// Never have any styles
// Provide the data and behavior to view or other container components
// Call actions and provide these as callbacks to view components
// Have no props and no UI logic (This is both for performance reasons, and to ensure that containers are re-usable and props do not have to be threaded throughout a component tree)
// Please note: In redux, we won't use functional components to create containers
