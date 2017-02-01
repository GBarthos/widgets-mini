SystemJS.config({
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.20",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.22.0"
  },
  packages: {
    "npm:babel-plugin-transform-react-jsx@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.22.0",
        "babel-runtime": "npm:babel-runtime@6.22.0"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.22.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "babel-types": "npm:babel-types@6.22.0",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-types@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "lodash": "npm:lodash@4.17.4",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-runtime@6.22.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1",
        "core-js": "npm:core-js@2.4.1"
      }
    }
  }
});
