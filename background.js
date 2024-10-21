// Define a cross-browser compatible API object
const browserAPI = typeof chrome !== "undefined" ? chrome : browser;

browserAPI.action.onClicked.addListener(() => {
  browserAPI.tabs.create({
    url: "https://www.marxists.org/archive/marx/index.htm",
  });
});
