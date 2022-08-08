import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

let mode = "development";
if(process.env.NODE_ENV === "production") {
  mode = "production";
};

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
  new MiniCssExtractPlugin,
];

const output = {
  path: path.resolve(path.join(process.cwd()), "dist"),
  clean: true,
};

const resolve = {
  extensions: [".js", ".ts", ".tsx"],
  modules: [path.join(process.cwd(), "src"), "node_modules"],
  alias: {
    react: path.join(process.cwd(), "node_modules", "react"),
  },
};

const module = {
  rules: [
    { test: /\.(html)$/, use: ['html-loader'] },
    { test: /\.(css)$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(svg|png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
        name(resourcePath, resourceQuery) {
          if(process.env.NODE_ENV === "development") {
            return "[path][name].[ext]";
          };
          return "[contenthash].[ext]";
        }
      },
    },
  ],
};

const config = {
  mode,
  plugins,
  entry: "./src/index.tsx",
  output,
  resolve,
  module,
  devtool: "source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};

export default config;