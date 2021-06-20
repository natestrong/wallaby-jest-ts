module.exports = function (w) {
  return {
    files: [
      '/*doThing.ts'
    ],
    tests: [
      '/*spec.ts'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest'
  };
};
