export default function digestMiddleware($rootScope) {
  return store => next => action => {
      const result = next(action);
      $rootScope.$evalAsync(result);
      return result
  };
}
