"use strict";

module.exports = {
  name: require("./package").name,
  treeForAddon(tree) {
    let writeFile = require("broccoli-file-creator");
    let mergeTrees = require("broccoli-merge-trees");

    let version;
    try {
      throw new Error('finding stack');
    } catch (err) {
      let location = /\(([^(]+ember-cli)\/lib\/models\/addon.js/.exec(err.stack)[1]
      version = require(`${location}/package.json`).version;
    }


    return this._super.treeForAddon.call(
      this,
      mergeTrees([
        tree,
        writeFile(`index.js`, `
          export const cliVersion = "${version}";
          export const expectedVersion = "${process.env.EXPECT_CLI}";
        `),
      ])
    );
  },
};
