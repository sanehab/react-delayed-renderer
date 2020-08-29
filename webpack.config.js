module.exports = {
  entry: { index: "./DelayedRenderer.jsx" },
  output: {
    libraryTarget: "umd",
    globalObject: "this",
    filename: "index.js",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": "ReactDOM",
    "prop-types": {
      root: "PropTypes",
      commonjs2: "prop-types",
      commonjs: "prop-types",
      amd: "prop-types",
    },
  },
}
