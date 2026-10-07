export type Feature = {
  id: string;
  title: string;
  body: string;
  shortcut?: string;
};

export type FeatureGroup = {
  id: string;
  title: string;
  lede: string;
  items: Feature[];
};

/** Real Orza capabilities only — from tip settings, menus, and chrome. */
export const featureGroups: FeatureGroup[] = [
  {
    id: "tabs-spaces",
    title: "Tabs & Spaces",
    lede: "Organize how you actually browse — not how a mockup does.",
    items: [
      {
        id: "spaces",
        title: "Spaces",
        body: "Toggle Spaces and switch from the sidebar when you want separate contexts without extra windows.",
      },
      {
        id: "tree-tabs",
        title: "Tree tabs",
        body: "Nest tabs under the page that opened them. Hierarchy stays visible in the sidebar.",
      },
      {
        id: "split-tabs",
        title: "Split tabs",
        body: "Split the current view. Close only the focused pane with ⌘W — the other side stays put.",
        shortcut: "⌘\\",
      },
      {
        id: "sidebar",
        title: "Sidebar",
        body: "Favorites pins, open tabs, and header tools in one column. Stock AppKit density, not a clone of Chrome.",
      },
    ],
  },
  {
    id: "privacy-shields",
    title: "Privacy & Shields",
    lede: "Controls that live in Settings — no marketing claims beyond what the app does.",
    items: [
      {
        id: "adblock",
        title: "Adblock",
        body: "Block ads by default. Disable per host when a site needs an exception.",
      },
      {
        id: "popups",
        title: "Block popups",
        body: "Stop unsolicited popup windows before they interrupt the page.",
      },
      {
        id: "permissions",
        title: "Permissions",
        body: "Camera, microphone, and location — grant or deny per site from Settings.",
      },
      {
        id: "veil",
        title: "Veil",
        body: "Private window that does not read or write browsing history.",
        shortcut: "⌘⇧N",
      },
      {
        id: "connection",
        title: "Connection security",
        body: "Inspect the connection from a dedicated popover when you need to know what you are on.",
      },
    ],
  },
  {
    id: "chrome-library",
    title: "Chrome & Library",
    lede: "Mac-native chrome you can hide, tune, and search.",
    items: [
      {
        id: "url-pill",
        title: "URL pill / Go…",
        body: "Focus the address field and go. The same path as a Mac browser should feel.",
        shortcut: "⌘L",
      },
      {
        id: "hide-chrome",
        title: "Hide Chrome",
        body: "Put the chrome away when you want the page alone.",
        shortcut: "⌘S",
      },
      {
        id: "appearance",
        title: "System appearance",
        body: "Light, Dark, or Auto — Orza follows native materials, not a custom theme engine.",
      },
      {
        id: "accent",
        title: "Accent",
        body: "Pick an accent color that fits your Mac setup.",
      },
      {
        id: "media",
        title: "Media player",
        body: "Optional Now Playing bar at the bottom of the sidebar. Toggle it in Appearance.",
      },
      {
        id: "library",
        title: "Library",
        body: "Bookmarks, history, and settings in one hub.",
        shortcut: "⌘⇧L",
      },
      {
        id: "reader",
        title: "Reader",
        body: "Show Reader when the page is worth stripping down.",
      },
      {
        id: "find",
        title: "Find in page",
        body: "Search the current document without leaving the window.",
      },
    ],
  },
  {
    id: "everyday",
    title: "Everyday",
    lede: "The small things you use every session.",
    items: [
      {
        id: "new-tab",
        title: "New Tab",
        body: "Empty New Tab shows “Press ⌘L to start.” Optional wallpaper photo when you want more than void.",
      },
      {
        id: "search",
        title: "Search engine",
        body: "Choose your search engine. Suggestions draw from search and history.",
      },
      {
        id: "restore",
        title: "Restore session",
        body: "Come back to where you left off when you relaunch.",
      },
      {
        id: "downloads",
        title: "Downloads",
        body: "Progress in the dock and sidebar while files land.",
      },
      {
        id: "bookmark",
        title: "Bookmark",
        body: "Save the current page from the menu or the shortcut.",
        shortcut: "⌘D",
      },
      {
        id: "share",
        title: "Share",
        body: "Hand the page off through macOS Share when you need it elsewhere.",
      },
    ],
  },
];

export const downloadUrl =
  "https://github.com/Acidity-Studio/orza-releases";

export const studioUrl = "https://acidity.lol";
