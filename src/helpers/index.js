function setPagination(options) {
  const offset = (options.page - 1) * options.limit;

  if (options.limit < 0) {
    delete options.limit;
    return options;
  }

  return {
    ...options,
    offset,
  };
}
module.exports = {
  setPagination,
};
