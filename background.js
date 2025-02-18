browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "searchCambridge",
        title: "Search Cambridge Dictionary for '%s'",
        contexts: ["selection"],
        icons: {
            "16": "icons/icon.ico", // for 16x16 size if needed
            "32": "icons/icon.ico", // for 32x32 size if needed
            "48": "icons/icon.ico", // for 48x48 size
            "128": "icons/icon.ico" // for 128x128 size
        }
    });
});

browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "searchCambridge") {
        const query = info.selectionText;
        const url = `https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${encodeURIComponent(query)}`;
        browser.tabs.create({ url });
    }
});

browser.omnibox.onInputEntered.addListener((text) => {
    const url = `https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${encodeURIComponent(text)}`;
    browser.tabs.create({ url });
});
