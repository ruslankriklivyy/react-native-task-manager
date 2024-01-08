module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: ["./"], // Set the root to the current directory (root)
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@/*": "./", // Adjust the path based on your project structure
          },
        },
      ],
    ],
  };
};
