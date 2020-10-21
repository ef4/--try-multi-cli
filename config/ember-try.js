'use strict';

module.exports = async function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '3.16.0',
            'ember-cli': '3.16.0'
          }
        },
        env: {
          EXPECT_CLI: "3.16.0"
        }
      },
      {
        name: 'ember-default',
        // Uncomment this to make the tests pass:
        // npm: {
        //   devDependencies: {}
        // },
        env: {
          EXPECT_CLI: "3.21.2"
        }
      }
    ]
  };
};
