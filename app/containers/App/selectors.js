import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

const globalSelect = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

  const makeSelectIsLogged = () =>
  createSelector(globalSelect, globalSelect => globalSelect.get('isloggedIn'));

export { makeSelectLocation ,makeSelectIsLogged};
