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

/** Orza product features. */
export const featureGroups: FeatureGroup[] = [
  {
    id: "tabs-spaces",
    title: "Tabs & Spaces",
    lede: "Organize how you actually browse.",
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
        id: "favorites",
        title: "Favorites",
        body: "Pin the sites you return to in the sidebar so they stay one click away.",
      },
    ],
  },
  {
    id: "privacy-shields",
    title: "Privacy & Shields",
    lede: "Quiet sessions when you need them.",
    items: [
      {
        id: "adblock",
        title: "Adblock / Shield",
        body: "Block ads by default. Disable per host when a site needs an exception. Popups stay blocked unless you allow them.",
      },
      {
        id: "veil",
        title: "Veil",
        body: "Private window that does not read or write browsing history.",
        shortcut: "⌘⇧N",
      },
    ],
  },
  {
    id: "chrome-library",
    title: "Chrome & Library",
    lede: "Mac chrome you can hide — plus the hub you open often.",
    items: [
      {
        id: "go",
        title: "Go…",
        body: "Focus the address field and go.",
        shortcut: "⌘L",
      },
      {
        id: "hide-chrome",
        title: "Hide Chrome",
        body: "Put the chrome away when you want the page alone.",
        shortcut: "⌘S",
      },
      {
        id: "media",
        title: "Media player",
        body: "Optional Now Playing bar at the bottom of the sidebar.",
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
    ],
  },
  {
    id: "everyday",
    title: "Session",
    lede: "Come back to where you left off.",
    items: [
      {
        id: "restore",
        title: "Restore session",
        body: "Come back to where you left off when you relaunch.",
      },
    ],
  },
];

export const downloadUrl =
  "https://github.com/Acidity-Studio/orza-releases";

export const studioUrl = "https://acidity.lol";
