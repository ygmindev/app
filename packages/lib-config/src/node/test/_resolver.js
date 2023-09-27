module.exports = (path, options) => {
  const firebaseRegex = /^@?firebase/;

  return options.defaultResolver(path, {
    ...options,
    packageFilter: (pkg) => {
      if (firebaseRegex.test(pkg.name)) {
        delete pkg.exports;
        delete pkg.module;
        delete pkg.browser;
      }
      return pkg;
    },
  });
};
