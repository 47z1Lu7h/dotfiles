const KeyExtensionStatus = "extensionStatus";
const KeyListsButton = "listsButton";
const KeyCommunitiesButton = "communitiesButton";
const KeyTopicsButton = "topicsButton";
const KeyXPremiumButton = "xPremiumButton";
const KeyVerifiedOrgsButton = "verifiedOrgsButton";
const KeyTypefullyGrowTab = "typefullyGrowTab";
const KeyGrokButton = "grokButton";
const KeyFollowingTimeline = "followingTimeline";
const KeyTrendsHomeTimeline = "trendsHomeTimeline";
const KeyRemoveTimelineTabs = "removeTimelineTabs";
const KeyWriterMode = "writerMode";
const KeyTimelineWidth = "timelineWidth";
const KeyRemoveTimelineBorders = "timelineBorders";
const KeyRemoveTweetBorders = "tweetBorders";
const KeyStickyHeader = "stickyHeader";
const KeySidebarLogo = "sidebarLogo";
const KeyHomeButton = "homeButton";
const KeyExploreButton = "exploreButton";
const KeyNotificationsButton = "notificationsButton";
const KeyMessagesButton = "messagesButton";
const KeyBookmarksButton = "bookmarksButton";
const KeyTopArticlesButton = "topArticlesButton";
const KeyProfileButton = "profileButton";
const KeyNavigationButtonsLabelsHover = "navigationButtonsLabelsHover";
const KeyNavigationButtonsLabels = "navigationButtonsLabels";
const KeyNavigationCenter = "navigationCenter";
const KeyUnreadCountBadge = "unreadCountBadge";
const KeyAllVanity = "allVanity";
const KeyReplyCount = "replyCount";
const KeyRetweetCount = "retweetCount";
const KeyLikeCount = "likeCount";
const KeyFollowCount = "followCount";
const KeyTweetButton = "tweetButton";
const KeySearchBar = "searchBar";
const KeyTransparentSearch = "transparentSearch";
const KeyRemovePromotedPosts = "removePromotedPosts";
const KeyRemoveTopicsToFollow = "removeTopicsToFollow";
const KeyRecentMedia = "recentMedia";
const KeyTypefullyComposerButtons = "typefullyComposerButtons";
const KeyInterFont = "interFont";
const KeyTitleNotifications = "titleNotifications";
const KeyCustomCss = "customCss";
const KeyHideViewCount = "hideViewCount";

const allSettingsKeys = [
  KeyExtensionStatus,
  KeyListsButton,
  KeyCommunitiesButton,
  KeyTopicsButton,
  KeyXPremiumButton,
  KeyVerifiedOrgsButton,
  KeyTypefullyGrowTab,
  KeyGrokButton,
  KeyFollowingTimeline,
  KeyTrendsHomeTimeline,
  KeyRemoveTimelineTabs,
  KeyWriterMode,
  KeyTimelineWidth,
  KeyRemoveTimelineBorders,
  KeyRemoveTweetBorders,
  KeyStickyHeader,
  KeySidebarLogo,
  KeyHomeButton,
  KeyExploreButton,
  KeyNotificationsButton,
  KeyMessagesButton,
  KeyBookmarksButton,
  KeyTopArticlesButton,
  KeyProfileButton,
  KeyNavigationButtonsLabelsHover,
  KeyNavigationButtonsLabels,
  KeyNavigationCenter,
  KeyUnreadCountBadge,
  KeyAllVanity,
  KeyReplyCount,
  KeyRetweetCount,
  KeyLikeCount,
  KeyFollowCount,
  KeyTweetButton,
  KeySearchBar,
  KeyTransparentSearch,
  KeyRemovePromotedPosts,
  KeyRemoveTopicsToFollow,
  KeyRecentMedia,
  KeyTypefullyComposerButtons,
  KeyInterFont,
  KeyTitleNotifications,
  KeyCustomCss,
  KeyHideViewCount,
];

const defaultPreferences = {
  [KeyExtensionStatus]: "on",
  [KeyTimelineWidth]: 700,
  [KeyRemoveTimelineBorders]: "off",
  [KeyRemoveTweetBorders]: "off",
  [KeyStickyHeader]: "on",
  [KeySidebarLogo]: "on",
  [KeyHomeButton]: "on",
  [KeyExploreButton]: "on",
  [KeyNotificationsButton]: "on",
  [KeyMessagesButton]: "on",
  [KeyBookmarksButton]: "on",
  [KeyTopArticlesButton]: "off",
  [KeyCommunitiesButton]: "on",
  [KeyTopicsButton]: "off",
  [KeyListsButton]: "on",
  [KeyXPremiumButton]: "off",
  [KeyGrokButton]: "on",
  [KeyVerifiedOrgsButton]: "off",
  [KeyTypefullyGrowTab]: "on",
  [KeyProfileButton]: "on",
  [KeyNavigationButtonsLabels]: "off",
  [KeyNavigationButtonsLabelsHover]: "on",
  [KeyNavigationCenter]: "off",
  [KeyUnreadCountBadge]: "off",
  [KeyWriterMode]: "off",
  [KeyReplyCount]: "on",
  [KeyRetweetCount]: "on",
  [KeyLikeCount]: "on",
  [KeyFollowCount]: "on",
  [KeyTweetButton]: "on",
  [KeySearchBar]: "on",
  [KeyTransparentSearch]: "off",
  [KeyRemovePromotedPosts]: "on",
  [KeyRemoveTopicsToFollow]: "on",
  [KeyRemoveTimelineTabs]: "off",
  [KeyFollowingTimeline]: "off",
  [KeyTrendsHomeTimeline]: "off",
  [KeyRecentMedia]: "off",
  [KeyTypefullyComposerButtons]: "on",
  [KeyInterFont]: "off",
  [KeyTitleNotifications]: "on",
  [KeyCustomCss]: "",
  [KeyHideViewCount]: "off",
};

const selectors = {};

// Layout
selectors.mainWrapper = `main[role="main"]`;
selectors.mainColumn = `[data-testid="primaryColumn"]`;
selectors.topHeader = `${selectors.mainColumn} > div > div:nth-of-type(1)`;
selectors.timelineTabs = `${selectors.mainColumn} > div:first-child > div:first-child > div:first-child > div:only-child > nav:only-child`;
selectors.leftSidebar = `header[role="banner"]`;
selectors.leftSidebarLinks = `${selectors.leftSidebar} nav[role="navigation"]`;
selectors.leftSidebarUnreadBadge = `${selectors.leftSidebarLinks} a svg + div[aria-label]:only-of-type`;
selectors.sidebarLinks = {
  logo: `${selectors.leftSidebar} div:first-child > div:first-child div:first-child > div:first-child > h1:only-child[role="heading"]`,
  home: `${selectors.leftSidebar} [data-testid="AppTabBar_Home_Link"]`,
  explore: `${selectors.leftSidebar} [data-testid="AppTabBar_Explore_Link"]`,
  notifications: `${selectors.leftSidebar} [data-testid="AppTabBar_Notifications_Link"]`,
  messages: `${selectors.leftSidebar} [data-testid="AppTabBar_DirectMessage_Link"]`,
  bookmarks: `${selectors.leftSidebar} a[href*="bookmarks"]`,
  articles: `${selectors.leftSidebar} a[href*="i/articles"]`,
  topics: `${selectors.leftSidebar} a[href*=topics]`,
  circles: `${selectors.leftSidebar} a[href*=circles]`,
  communities: `${selectors.leftSidebar} a[href*=communities]`,
  profile: `${selectors.leftSidebar} [data-testid="AppTabBar_Profile_Link"]`,
  lists: `${selectors.leftSidebar} a[href*="lists"][role="link"][aria-label]`,
  xPremium: `${selectors.leftSidebar} a[href*="premium"][role="link"][aria-label]`,
  verifiedOrgs: `${selectors.leftSidebar} a[href*="verified-orgs"][role="link"][aria-label]`,
  analytics: `${selectors.leftSidebar} .mt-sidebar-button[aria-label="Analytics"]`,
  grok: `${selectors.leftSidebar} a[href*="grok"][role="link"][aria-label]`,
};
selectors.accountSwitcherButton = `[data-testid="SideNav_AccountSwitcher_Button"]`;
selectors.leftSidebarLabel = `${selectors.leftSidebarLinks} * div:last-child > span:only-child`;
selectors.accountSwitcherLabel = `${selectors.accountSwitcherButton} > div:not(:first-child)`;
selectors.leftSidebarLabel_hover = `${selectors.leftSidebarLinks}:hover * div:last-child > span:only-child`;
selectors.accountSwitcherLabel_hover = `${selectors.accountSwitcherButton}:hover > div:not(:first-child)`;
selectors.rightSidebar = `[data-testid="sidebarColumn"]`;
// Timeline
selectors.tweetCounts = `[role="group"][id*="id__"]:only-child`;
selectors.viewCount = selectors.tweetCounts + " a[href*='/analytics']";
selectors.tweet = `[data-testid="tweet"][role="article"]`;
selectors.tweetSpan = `${selectors.tweet} div > div:only-child > span:only-child > span`;
// Search
selectors.searchBox = `${selectors.rightSidebar} form[role="search"]`;
selectors.searchBoxInput = `${selectors.searchBox} input:only-child`;
// Modals
selectors.modalExternalWrapper = `div[role="group"]`;
selectors.modalBackground = `${selectors.modalExternalWrapper} > div:empty`;
selectors.modalWrapper = `div[aria-labelledby="modal-header"][role="dialog"]`;
selectors.modalUi = `${selectors.modalWrapper} > div`;

async function changeHideViewCounts(setting) {
  const viewCounts = Array.from(document.querySelectorAll(selectors.viewCount));

  if (!viewCounts.length) return;

  if (setting === "off") {
    viewCounts.forEach((el) => {
      el.parentElement && (el.parentElement.style.display = "flex");
    });
  } else if (setting === "on") {
    viewCounts.forEach((el) => {
      el.parentElement && (el.parentElement.style.display = "none");
    });
  }
}

const svgAssets = {
  grow: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H19C19.5523 5 20 5.44771 20 6V6.58579L12 14.5858L8.70711 11.2929L8 10.5858L7.29289 11.2929L4 14.5858V6C4 5.44772 4.44772 5 5 5ZM4 17.4142V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V9.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L4 17.4142ZM2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6Z"/>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V16.5858L7.29289 11.2929L8 10.5858L8.70711 11.2929L12 14.5858L21.761 4.82474C21.3038 3.752 20.2397 3 19 3H5ZM22 7.41421L12.7071 16.7071L12 17.4142L11.2929 16.7071L8 13.4142L2.23895 19.1753C2.69615 20.248 3.76026 21 5 21H19C20.6569 21 22 19.6569 22 18V7.41421Z"/>`,
  },
  lists: {
    normal: `<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>`,
    selected: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2C4.12 2 3 3.12 3 4.5V19.5C3 20.88 4.12 22 5.5 22H18.5C19.88 22 21 20.88 21 19.5V4.5C21 3.12 19.88 2 18.5 2H5.5ZM8 10H16V8H8V10ZM16 12H8V14H16V12Z" />`,
  },
  topics: {
    normal: `<path d="M12 3.75C7.99 3.75 4.75 7 4.75 11s3.24 7.25 7.25 7.25h1v2.44c1.13-.45 2.42-1.3 3.54-2.54 1.52-1.67 2.66-3.95 2.71-6.67.07-4.46-3.28-7.73-7.25-7.73zM2.75 11c0-5.11 4.14-9.25 9.25-9.25s9.34 4.23 9.25 9.77c-.06 3.28-1.44 6.01-3.23 7.97-1.76 1.94-3.99 3.21-5.87 3.5l-1.15.17V20.2c-4.64-.5-8.25-4.43-8.25-9.2zM15 10H9V8h6v2zm-2 4H9v-2h4v2z"></path>`,
  },
  circles: {
    normal: `<path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.417-3.68c-.541.97-1.601 1.99-3.352 2.98l-.201.12-.202-.12c-1.751-.99-2.811-2.01-3.352-2.98-.545-.97-.564-1.88-.206-2.59.355-.69 1.059-1.13 1.84-1.17.661-.03 1.348.22 1.92.79.571-.57 1.258-.82 1.918-.79.781.04 1.485.48 1.84 1.17.358.71.339 1.62-.205 2.59z"></path>`,
  },
  communities: {
    normal: `<path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672a9.115 9.115 0 00-1.212 1.656 4.388 4.388 0 00-1.658-.329c-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9a3.467 3.467 0 01-2.116-.73 3.483 3.483 0 01-1.384-2.77c0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77a3.467 3.467 0 01-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z" />`,
  },
  xPremium: {
    normal: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
  },
  verifiedOrgs: {
    normal: `<path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path>`,
    selected: `<path d="M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z"></path>`,
  },
  composerWriterMode: {
    normal: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H4V5V13H6V7.41421L9.79289 11.2071L11.2071 9.79289L7.41421 6H13V4H5ZM19 20H20V19L20 11H18L18 16.5858L14.2071 12.7929L12.7929 14.2071L16.5858 18L11 18V20H19Z"/>`,
    selected: `<path d="M11 11L11 3H9L9 7.58579L5.89461 4.48039L4.48039 5.89461L7.58579 9L3 9V11L11 11Z"/><path d="M13 13V21H15V16.4142L18.1054 19.5196L19.5196 18.1054L16.4142 15H21V13H13Z"/>`,
  },
  typefullyBox: {
    arrow: `<svg width="24" height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L12 6H0L6 0Z" fill="currentColor"/></svg>
`,
    close: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 12" stroke="currentColor" stroke-width="2"/><path d="M12 12L2 2" stroke="currentColor" stroke-width="2"/></svg>`,
  },
  typefully: {
    logo: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0781 28.9919C23.44 28.9919 24.5394 27.9035 24.5394 26.5551C24.5394 25.2068 23.44 24.1184 22.0781 24.1184C20.7161 24.1184 19.6168 25.2068 19.6168 26.5551C19.6168 27.9035 20.7161 28.9919 22.0781 28.9919ZM19.0425 17.4174C19.3542 17.328 19.4445 17.4174 19.3296 17.726C18.7471 19.3586 17.3441 21.373 14.6121 22.0959C13.3158 22.4371 12.0605 22.4046 11.0514 22.6726C10.4524 22.8269 9.96838 23.1275 9.48432 23.7691C8.27006 25.3693 6.82609 28.9919 5.39852 29C5.11137 29 4.97189 28.8051 5.00471 28.5695C5.05394 28.1878 5.40673 27.5867 5.75131 26.8557C12.7579 12.089 15.17 3 24.8348 3C26.6972 3 25.8521 3.60106 25.5075 3.99094C22.1273 7.86535 22.357 12.3652 20.0106 14.7451C18.222 16.5726 14.4972 17.0275 12.9384 17.1331C12.602 17.1575 12.561 17.3686 12.8809 17.4986C14.8664 18.3108 17.6887 17.791 19.0425 17.4092V17.4174Z" fill="currentColor"/></svg>`,
  },
};

// Utility function to remove DOM element
function removeElementById(id) {
  const element = document.getElementById(id);
  element && element.remove();
}

function addStyles(id, css) {
  removeElementById("mt-style-" + id);

  const head = document.querySelector("head");
  const style = document.createElement("style");
  style.id = "mt-style-" + id;
  style.textContent = css.trim().split("\n").join("");
  head.appendChild(style);
}

function removeStyles(id) {
  removeElementById("mt-style-" + id);
}

function stylesExist(id) {
  return document.getElementById("mt-style-" + id);
}

// The html structure of buttons (i.e. if it has a label or not) changes based on viewport size,
// so when adding sidebar buttons on subsequent renders after page load, we used the `forced`
// parameter to re-add the element so that it's displayed correctly.

const addSidebarButton = ({ name, href, userHref, onClick, svgAsset, forced }) => {
  const existingElement = document.querySelector(`nav[role="navigation"] > [aria-label="${name}"]`);

  if (existingElement && !forced) return;

  const profileNode = document.querySelector('nav[role="navigation"] > a[role="link"][data-testid="AppTabBar_Profile_Link"]');
  if (!profileNode) return;

  const newNode = createNewElement({ name, href, userHref, onClick, svgAsset, profileNode });

  if (existingElement) {
    if (forced) {
      existingElement.replaceWith(newNode);
    } else {
      newNode.remove();
    }
  } else {
    profileNode.insertAdjacentElement("beforebegin", newNode);
  }
};

const createNewElement = ({ profileNode, name, href, userHref, onClick, svgAsset }) => {
  let newNode;

  try {
    if (href || userHref) {
      newNode = profileNode.cloneNode(true);
      if (href) newNode.href = href;
      if (userHref) newNode.href += userHref;
    } else if (onClick) {
      newNode = document.createElement("div");
      newNode.innerHTML = profileNode.innerHTML;
      newNode.style.cursor = "pointer";
      newNode.onclick = () => onClick(newNode);
    }

    newNode.setAttribute("aria-label", name);
    newNode.removeAttribute("data-testid");
    newNode.classList.add("mt-sidebar-button"); // To style it in main.css
    newNode.firstChild.firstChild.firstChild.innerHTML = svgAsset;
    newNode.firstChild.lastChild.firstChild.innerText = name;
  } catch (error) {
    console.log(`❌ Error creating ${name} sidebar button`);
    console.warn(error);
  }

  return newNode;
};

/*--
- Docs: https://developer.chrome.com/docs/extensions/reference/storage/
- Use storage.local to allow user to store customizations
--*/

const getStorage = (storageKeyOrKeys) => {
  try {
    if (typeof storageKeyOrKeys !== "string" && !Array.isArray(storageKeyOrKeys)) {
      throw new Error("storageKeyOrKeys must be a string or an array of strings");
    }
    if (Array.isArray(storageKeyOrKeys)) {
      return getMultipleStorageKeys(storageKeyOrKeys);
    } else {
      return getSingleStorageKey(storageKeyOrKeys);
    }
  } catch (error) {
    console.error(error);
  }
};

const getSingleStorageKey = (key) => {
  return new Promise((resolve, _reject) => {
    chrome?.storage?.local.get([key], (data) => {
      resolve(data[key] ?? defaultPreferences[key]); // Fallback to the default preference
    });
  });
};

const getMultipleStorageKeys = (keysArray) => {
  return new Promise((resolve, _reject) => {
    chrome?.storage?.local.get(keysArray, (data) => {
      const res = keysArray.reduce((acc, cur) => {
        acc[cur] = data[cur] ?? defaultPreferences[cur]; // For each key, fallback to the default preference
        return acc;
      }, {});
      resolve(res);
    });
  });
};

/*--
- Set storage with storage.local
- kv => {key: value} (Single key value pair)
- Throttle function to prevent hitting API limits
- The maximum number of set, remove, or clear operations = 120
  - 1 min = 60000 ms
  - 60000 ms / 120 operations = 500 ms/operation
--*/
const setStorage = async (kv) => {
  const promise = new Promise((resolve, _reject) => {
    chrome?.storage?.local.set(kv, () => {
      return resolve(kv);
    });
  });
  return promise;
};

// Utilities

const changeSidebarSetting = (sidebarSelector, state, onAdd) => {
  switch (state) {
    case "off":
      addStyles(
        sidebarSelector,
        `${selectors.sidebarLinks[sidebarSelector]} {
          display: none;
        }`
      );
      break;

    case "on":
      removeStyles(sidebarSelector);
      onAdd?.();
      break;
  }
};

// Functions

const changeSidebarLogo = (state) => changeSidebarSetting("logo", state);
const changeHomeButton = (state) => changeSidebarSetting("home", state);
const changeExploreButton = (state) => changeSidebarSetting("explore", state);
const changeNotificationsButton = (state) => changeSidebarSetting("notifications", state);
const changeMessagesButton = (state) => changeSidebarSetting("messages", state);
const changeBookmarksButton = (state) => changeSidebarSetting("bookmarks", state);
const changeTopArticlesButton = (state) => changeSidebarSetting("articles", state);
const changeVerifiedOrgsButton = (state) => changeSidebarSetting("verifiedOrgs", state);
const changeProfileButton = (state) => changeSidebarSetting("profile", state);
const changeXPremiumButton = (state) => changeSidebarSetting("xPremium", state, addXPremiumButton);
const changeGrokButton = (state) => changeSidebarSetting("grok", state);
const changeTopicsButton = (state) => changeSidebarSetting("topics", state, addTopicsButton);
const changeCommunitiesButton = (state) => changeSidebarSetting("communities", state, addCommunitiesButton);
const changeListsButton = (state) => changeSidebarSetting("lists", state, addListsButton);
const changeAnalyticsButton = (state) => changeSidebarSetting("analytics", state, addAnalyticsButton);

let tm1;
const addXPremiumButton = (forced) => {
  clearTimeout(tm1);
  tm1 = setTimeout(() => {
    addSidebarButton({
      name: "Premium",
      href: "/settings/premium",
      svgAsset: svgAssets.xPremium.normal,
      forced,
    });
  }, 100);
};

let tm2;
const addAnalyticsButton = (forced) => {
  clearTimeout(tm2);
  tm2 = setTimeout(() => {
    addSidebarButton({
      name: "Analytics",
      forced,
      svgAsset: svgAssets.grow.normal,
      onClick: () => {
        const screenName = document.querySelector(`a[role="link"][data-testid="AppTabBar_Profile_Link"]`)?.getAttribute("href").replace("/", "");
        if (screenName) window.open(`https://typefully.com/grow?ref=minimal-twitter&mt-screen-name=${screenName}`, "_blank");
      },
    });
  }, 200);
};

const addTopicsButton = (forced) => {
  addSidebarButton({
    name: "Topics",
    userHref: "/topics",
    svgAsset: svgAssets.topics.normal,
    forced,
  });
};

const addCommunitiesButton = (forced) => {
  addSidebarButton({
    name: "Communities",
    userHref: "/communities",
    svgAsset: svgAssets.communities.normal,
    forced,
  });
};

const addListsButton = (forced) => {
  addSidebarButton({
    name: "Lists",
    userHref: "/lists",
    svgAsset: svgAssets.lists.normal,
    forced,
  });
};

const changeUnreadCountBadge = (unreadCountBadge) => {
  switch (unreadCountBadge) {
    case "on":
      removeStyles("unreadCountBadge");
      break;
    case "off":
      addStyles(
        "unreadCountBadge",
        `${selectors.leftSidebarUnreadBadge} {
          display: none;
        }
        ${selectors.accountSwitcherButton} > div > svg+div[aria-label] {
          display: none;
        }`
      );
      break;
  }
};

const addStyleToRemoveLabels = () => {
  addStyles(
    "removeLabels",
    `
        ${selectors.leftSidebarLinks} > * > div > div + div:last-child {
          display: none;
        }
        ${selectors.leftSidebarLinks} > * {
          max-width: 80px;
        }
        `
  );
};

const changeNavigationButtonsLabelsHover = async (setting) => {
  const labelsHidden = (await getStorage(KeyNavigationButtonsLabels)) === "off";

  switch (setting) {
    case "off":
      removeStyles("showLabelsOnHover");
      labelsHidden && addStyleToRemoveLabels();
      break;

    case "on":
      removeStyles("removeLabels");
      addStyles(
        "showLabelsOnHover",
        `
        ${selectors.leftSidebarLabel_hover},
        ${selectors.accountSwitcherLabel_hover} {
          opacity: 1;
        }
        `
      );
      break;
  }
};

const changeNavigationButtonsLabels = async (setting) => {
  const showLabelsOnHover = (await getStorage(KeyNavigationButtonsLabelsHover)) === "on";

  switch (setting) {
    case "on":
      removeStyles("hideLabels");
      removeStyles("removeLabels");
      break;

    case "off":
      !showLabelsOnHover && addStyleToRemoveLabels();
      addStyles(
        "hideLabels",
        `
        ${selectors.leftSidebarLabel},
        ${selectors.accountSwitcherLabel} {
          display: inline-block;
          opacity: 0;
          transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        `
      );

      break;
  }
};

const changeNavigationCenter = (navigationCenter) => {
  switch (navigationCenter) {
    case "on":
      addStyles(
        "navigationCenter",
        `
        ${selectors.leftSidebar} > div > div > div {
          justify-content: center;
          padding-top: 0;
        }
        `
      );
      break;

    case "off":
      removeStyles("navigationCenter");
      break;
  }
};

// Function to change Timeline Width
const changeTimelineWidth = (timelineWidth) => {
  switch (timelineWidth) {
    case 600:
      addStyles(
        "timelineWidth",
        `
        @media only screen and (min-width: 988px) {
          ${selectors.mainColumn} {
            width: 600px;
            max-width: 600px;
          }
        }
        `
      );
      break;

    case 650:
      addStyles(
        "timelineWidth",
        `
        @media only screen and (min-width: 988px) {
          ${selectors.mainColumn} {
            width: 650px;
            max-width: 650px;
          }
        }
        `
      );
      break;

    case 700:
      addStyles(
        "timelineWidth",
        `
        @media only screen and (min-width: 988px) {
          ${selectors.mainColumn} {
            width: 700px;
            max-width: 700px;
          }
        }
        `
      );
      break;

    case 750:
      addStyles(
        "timelineWidth",
        `
        @media only screen and (min-width: 988px) {
          ${selectors.mainColumn} {
            width: 750px;
            max-width: 750px;
          }
        }
        `
      );
      break;

    case 800:
      addStyles(
        "timelineWidth",
        `
        @media only screen and (min-width: 988px) {
          ${selectors.mainColumn} {
            width: 800px;
            max-width: 800px;
          }
        }
        `
      );
      break;
  }
};

// Function to change Timeline Borders
const changeTimelineBorders = (timelineBorders) => {
  switch (timelineBorders) {
    case "off":
      removeStyles("timelineBorders");
      break;

    case "on":
      addStyles(
        "timelineBorders",
        `
        @media only screen and (min-width: 988px) {
          div${selectors.mainColumn} {
            border-style: hidden;
          }
        }
        `.trim()
      );
      break;
  }
};

// Function to change Tweet Borders
const changeTweetBorders = (tweetBorders) => {
  switch (tweetBorders) {
    case "off":
      removeStyles("tweetBorders");
      break;

    case "on":
      addStyles(
        "tweetBorders",
        `
        ${selectors.mainWrapper} section > div > div > div > div {
          border-style: hidden;
        }
        ${selectors.mainColumn} > div > div:empty {
          background: transparent;
        }
        `.trim()
      );
      break;
  }
};

// Function to change Sticky Header
const changeStickyHeader = (stickyHeader) => {
  switch (stickyHeader) {
    case "on":
      removeStyles("stickyHeader");
      break;

    case "off":
      addStyles(
        "stickyHeader",
        `
        ${selectors.mainColumn} > div > div {
          position: unset;
        }
        `
      );
      break;
  }
};

// Function to change Promoted Posts
const changePromotedPosts = (removePromotedPosts) => {
  switch (removePromotedPosts) {
    case "off":
      addStyles(
        "removePromotedPosts",
        `
        [data-testid="placementTracking"] article {
          display: flex;
        }
        `
      );
      break;

    case "on":
      removeStyles("removePromotedPosts");
      break;
  }
};

// Function to change Topics to Follow
const changeTopicsToFollow = (removeTopicsToFollow) => {
  switch (removeTopicsToFollow) {
    case "off":
      removeStyles("removeTopicsToFollow");
      break;

    case "on":
      addStyles(
        "removeTopicsToFollow",
        `
        ${selectors.mainColumn} section[aria-labelledby^="accessible-list-"] > div[aria-label$="Carousel"],
        ${selectors.mainColumn} a[href*="/i/flow/topics_selector"],
        ${selectors.mainColumn} a[href*="/i/topics/picker/home"] {
          display: none;
        }
        [aria-label="Lists timeline"] section[aria-labelledby^="accessible-list-"] > div[aria-label$="Carousel"] {
          display: flex;
        }
        `
      );
      break;
  }
};

const changeTimelineTabs = (removeTimelineTabs, writerMode) => {
  if (writerMode === "on" || window.location.pathname.includes("compose/tweet") || !window.location.pathname.includes("/home") || !window.location.pathname === "/") {
    removeStyles("removeTimelineTabs");
    return;
  }

  switch (removeTimelineTabs) {
    case "off":
      removeStyles("removeTimelineTabs");
      break;

    case "on":
      if (stylesExist("removeTimelineTabs")) return;

      addStyles(
        "removeTimelineTabs",
        `
        ${selectors.timelineTabs} {
          display: none;
        }
        `
      );
      break;
  }
};

// Function to change Recent Media on Profiles
const changeRecentMedia = async (recentMedia) => {
  const userProfile = document.querySelector('meta[content*="twitter://user?screen_name="]');

  if (!userProfile) {
    removeStyles("recentMedia");
    return;
  }

  const sidebarPhotoGrid = document
    .querySelector(selectors.rightSidebar)
    ?.querySelector('[aria-label][tabindex="0"]')
    ?.querySelector('[style="padding-bottom: 56.25%;"]')?.parentElement;

  if (!sidebarPhotoGrid) return;

  const run = (rm) => {
    switch (rm) {
      case "off":
        removeStyles("recentMedia");
        sidebarPhotoGrid.classList.remove("mt-recentMedia-photoGrid");
        break;

      case "on":
        addStyles(
          "recentMedia",
          `
            @media only screen and (min-width: 1265px) {
              .mt-recentMedia-photoGrid {
                visibility: visible;
                position: fixed;
                right: 16px;
                top: 70px;
                width: 300px;
              }
              
              [data-testid="primaryColumn"] {
                transform: translateX(-64px);
              }
            }
            `
        );
        sidebarPhotoGrid.classList.add("mt-recentMedia-photoGrid");

        break;
    }
  };

  if (recentMedia) {
    run(recentMedia);
  } else {
    const setting = await getStorage(KeyRecentMedia);
    run(setting);
  }
};

// Function to change Show Trends on Home Timeline
const changeTrendsHomeTimeline = (trendsHomeTimeline, writerMode) => {
  if (writerMode === "on" || window.location.pathname.includes("compose/tweet") || !window.location.pathname.includes("/home") || !window.location.pathname === "/") {
    removeStyles("trendsHomeTimeline");
    return;
  }

  switch (trendsHomeTimeline) {
    case "off":
      removeStyles("trendsHomeTimeline");
      break;

    case "on":
      if (stylesExist("trendsHomeTimeline")) return;

      addStyles(
        "trendsHomeTimeline",
        `
          @keyframes render {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
              transform: none;
            }
          }
          @media only screen and (min-width: 1265px) {
            ${selectors.rightSidebar} section[aria-labelledby^="accessible-list-"] {
              visibility: visible;
              position: fixed;
              right: 16px;
              top: 66px;
              max-height: 78vh;
              overflow: auto;
              width: 300px;
              border-radius: 16px;
              border-color: var(--border-color);
              border-width: 1px;
              background-color: var(--body-bg-color);
              opacity: 0;
              will-change: opacity;
              animation-name: render;
              animation-duration: 0s;
              animation-fill-mode: forwards;
              animation-delay: 500ms;
              margin-top: 4px;
            }

            [data-testid="primaryColumn"] {
              transform: translateX(-64px);
            }
          }
          `
      );
      break;
  }
};

// Function to change Following Timeline
const changeFollowingTimeline = (followingTimeline) => {
  if (followingTimeline !== "on") return;

  const tablist = document.querySelector("div[data-testid='ScrollSnap-List'][role='tablist']");
  const selectedTab = document.querySelector("div[data-testid='ScrollSnap-List'][role='tablist'] a[href='/home'][aria-selected='true']");

  // Check if there's a selected tab
  if (!tablist || !selectedTab) return;

  const selectedTabText = selectedTab.querySelector("div[dir='ltr'] > span").textContent.toLowerCase();

  if (selectedTabText === "following") return;

  const secondTab = tablist.querySelector("div[role='presentation']:nth-child(2) a");

  secondTab.click(); // Following tab is second tab
};

function addTooltip(element, options) {
  const { id, title, description } = options ?? {};

  if (!element) return;
  let tooltip = document.getElementById(id);

  if (!tooltip) {
    // Create tooltip if if doesn't exist
    tooltip = document.createElement("div");
    tooltip.id = id;
    tooltip.classList.add("mt-tooltip", "hidden");
    tooltip.innerHTML = `${title ? `<span class="title">${title}</span>` : ""}
${description ? `<span class="description">${description}</span>` : ""}`;
    document.body.appendChild(tooltip);
  } else {
    // Update tooltip content if it already exists
    const newInnerHtml = `${title ? `<span class="title">${title}</span>` : ""}
${description ? `<span class="description">${description}</span>` : ""}`;

    tooltip.innerHTML = newInnerHtml;

    // Hide the tooltip by default if the content changed
    if (tooltip.innerHTML !== newInnerHtml) {
      tooltip.classList.add("hidden");
    }
  }

  function showTooltip() {
    tooltip.classList.remove("hidden");
    const rect = element.getBoundingClientRect();

    tooltip.style.top = `${rect.bottom + 10}px`;
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.right = "auto";

    // If the tooltip is outside the viewport, move it inside with 10px margin
    if (tooltip.offsetLeft < 10) {
      tooltip.style.left = "10px";
      tooltip.style.right = "auto";
    } else if (tooltip.offsetLeft + tooltip.offsetWidth > window.innerWidth - 10) {
      tooltip.style.right = "10px";
      tooltip.style.left = "auto";
    }
  }

  element.onmouseenter = showTooltip;
  element.onmouseover = showTooltip;

  element.onmouseleave = () => {
    tooltip.classList.add("hidden");
  };
}

const hideAllTooltips = () => {
  const tooltips = document.querySelectorAll(".mt-tooltip");

  tooltips.forEach((tooltip) => {
    tooltip.classList.add("hidden");
  });
};

// Function to add "Continue Thread in Typefully"
const addTypefullyPlug = () => {
  const modal = document.querySelector('[aria-labelledby="modal-header"][role="dialog"]');
  const tweetComposeArea = modal?.querySelector("div.public-DraftStyleDefault-block");
  const tweet2Exist = document.querySelector(`[data-testid="tweetTextarea_1"]`);
  const tweetButtonInlineDisabled = document.querySelector(`[data-testid="tweetButtonInline"][aria-disabled]`);
  const tweetButtonInlineNotDisabled = document.querySelector(`[data-testid="tweetButtonInline"]:not([aria-disabled])`);

  if (modal && tweet2Exist && tweetComposeArea && !document.getElementById("typefully-link")) {
    const typefullyLinkElement = createTypefullyLinkElement("typefully-link", "typefully-save-draft-button");
    const typefullyLogo = createTypefullyLogo();
    const typefullyText = document.createElement("span");

    typefullyLinkElement.addEventListener("click", () => {
      getCurrentTextAndSendToTypefully();
    });

    typefullyText.innerText = "Save draft to Typefully";
    typefullyLinkElement.appendChild(typefullyLogo);
    typefullyLinkElement.appendChild(typefullyText);
    modal.appendChild(typefullyLinkElement);
  }

  if (tweetButtonInlineDisabled && document.getElementById("typefully-link-inline")) {
    removeElementById("typefully-link-inline");
    removeStyles("inlinetweetbutton");
  }

  if (tweetButtonInlineNotDisabled && !document.getElementById("typefully-link-inline")) {
    const tweetButtonInline = document.querySelector(`[data-testid="tweetButtonInline"]`);
    const container = tweetButtonInline.parentElement;
    const typefullyLinkElement = createTypefullyLinkElement("typefully-link-inline", "typefully-save-draft-button ghost");
    const typefullyLogo = createTypefullyLogo();

    addTooltip(typefullyLinkElement, {
      id: "save-draft",
      title: "Save this draft to Typefully",
    });

    typefullyLinkElement.addEventListener("click", () => {
      getCurrentTextAndSendToTypefully();
    });
    typefullyLinkElement.appendChild(typefullyLogo);
    container.appendChild(typefullyLinkElement);

    addStyles(
      "inlinetweetbutton",
      `[data-testid="tweetButtonInline"] {
        margin-left: 8px;
        order: 2;
      }`
    );
  }
};

// Function to save current reply
const saveCurrentReplyToLink = () => {
  const reply = Array.from(document.querySelectorAll('[data-testid="reply"]'));

  if (!reply.length) return;

  function logLink(ev) {
    const linkElement = ev.target;
    const tweet = linkElement.closest('[data-testid="tweet"]');
    const tweetLinks = tweet.querySelectorAll("a[role='link']");
    const tweetLink = Array.from(tweetLinks).find((link) => link.href.includes("/status/")).href;
    sessionStorage.setItem("typefully-replying-to", tweetLink);
  }

  reply.forEach((replyButton) => {
    replyButton.removeEventListener("click", logLink);
    replyButton.addEventListener("click", logLink);
  });
};

// Function to add "Reply with Typefully"
const addTypefullyReplyPlug = () => {
  const modal = document.querySelector('[aria-labelledby="modal-header"][role="dialog"]');
  const toolbar = modal && modal.querySelector('[data-testid="toolBar"]');
  const replyButton = modal && modal.querySelector('[data-testid="tweetButton"]');

  const tweetComposeArea = modal?.querySelector("div.public-DraftStyleDefault-block");

  const replyingToLink = sessionStorage.getItem("typefully-replying-to");

  if (
    modal &&
    toolbar &&
    replyButton &&
    replyingToLink &&
    // tweet2Exist &&
    tweetComposeArea &&
    !document.getElementById("typefully-reply-link")
  ) {
    sessionStorage.removeItem("typefully-replying-to");

    const typefullyReplyLinkElement = createTypefullyLinkElement("typefully-reply-link", "typefully-reply-button");
    typefullyReplyLinkElement.addEventListener("click", () => {
      getCurrentTextAndSendToTypefully(replyingToLink);
    });

    const typefullyLogo = createTypefullyLogo();

    const typefullyText = document.createElement("span");
    typefullyText.innerText = "Reply with Typefully";

    typefullyReplyLinkElement.appendChild(typefullyLogo);
    typefullyReplyLinkElement.appendChild(typefullyText);

    modal.appendChild(typefullyReplyLinkElement);
  }
};

/* ----------------------------- Typefully Utils ---------------------------- */

const createTypefullyLinkElement = (id, className) => {
  const typefullyReplyLink = document.createElement("a");
  typefullyReplyLink.id = id;
  typefullyReplyLink.className = className;
  typefullyReplyLink.setAttribute("role", "button");
  typefullyReplyLink.setAttribute("tabindex", "0");
  return typefullyReplyLink;
};

const createTypefullyLogo = () => {
  const typefullyLogo = document.createElement("div");
  typefullyLogo.className = "typefully-logo";
  typefullyLogo.innerHTML = svgAssets.typefully.logo;
  typefullyLogo.style.position = "relative";
  return typefullyLogo;
};

const getCurrentTextAndSendToTypefully = (replyingToLink) => {
  let tweetTextAreaNumber = 0;
  let typefullyContent = "";

  while (true) {
    if (document.querySelector(`[data-testid="tweetTextarea_${tweetTextAreaNumber}"]`)) {
      if (tweetTextAreaNumber > 0) {
        typefullyContent = `${typefullyContent}\n\n\n\n\n`;
      }

      let tweetTextItems = Array.from(document.querySelectorAll(`[data-testid="tweetTextarea_${tweetTextAreaNumber}"] [data-text="true"]`));

      // remove trailing newlines at end of tweets (there is always one last <br> on the first tweet DOM node)
      tweetTextItems = tweetTextItems.filter((item, index) => !(item.tagName === "BR" && index === tweetTextItems.length - 1));

      tweetTextItems.forEach((item, index) => {
        const isLastItem = index === tweetTextItems.length - 1;
        const isTagOrMention = (item) => !!item.parentElement.parentElement.attributes.style;

        // handle hard break (2 newlines) within single tweet
        if (item.tagName === "BR" && !isLastItem) {
          typefullyContent += "\n\n";
        }
        // handle regular text (<span> elements)
        else {
          typefullyContent = `${typefullyContent}${item.innerText}`;

          // this handles non-hard breaks (just one newline) within a single tweet
          if (!isLastItem && !isTagOrMention(tweetTextItems[index + 1])) {
            typefullyContent += "\n";
          }
        }
      });
    } else {
      break;
    }

    tweetTextAreaNumber = tweetTextAreaNumber + 1;
  }

  // With URLSearchParams
  const url = new URL("https://typefully.com/");
  url.searchParams.set("ref", "minimal-twitter");
  url.searchParams.set("new", typefullyContent);
  if (replyingToLink) {
    url.searchParams.set("replyTo", replyingToLink);
  }
  window.open(url.toString());
};

async function addTypefullyBox(rootElement, storageKey, innerHTML, options = {}) {
  const { withArrow } = options ?? {};

  const key = "tp-box-seen:" + storageKey;

  const seen = await getStorage(key);

  if (seen !== "true") {
    const typefullyBox = document.createElement("div");
    typefullyBox.id = "typefully-writermode-box";
    typefullyBox.className = "typefully-box";

    typefullyBox.innerHTML = innerHTML;

    // Create svg element for the close button
    const closeButton = document.createElement("div");
    closeButton.id = "box-close-button";
    closeButton.innerHTML = svgAssets.typefullyBox.close;
    typefullyBox.appendChild(closeButton);

    if (withArrow) {
      const arrow = document.createElement("div");
      arrow.id = "box-arrow";
      arrow.innerHTML = svgAssets.typefullyBox.arrow;
      typefullyBox.appendChild(arrow);
    }

    function markSeen() {
      setStorage({ [key]: "true" }).then(() => {
        if (typefullyBox) typefullyBox.remove();
      });
    }

    closeButton.addEventListener("click", markSeen);

    rootElement.appendChild(typefullyBox);
  }
}

const escKeyListener = async (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    toggleWriterMode();
  }
};

let t; // Typefully Plug timeout
let zt1; // Zen Writer Mode timeout 1
let zt2; // Zen Writer Mode timeout 2
const changeWriterMode = (writerMode) => {
  if (window.location.pathname.includes("/home") || window.location.pathname === "/" || window.location.pathname.includes("/compose/tweet")) {
    switch (writerMode) {
      case "on":
        document.addEventListener("keydown", escKeyListener);

        if (stylesExist("writerMode")) return;

        clearTimeout(zt1);
        zt1 = setTimeout(() => {
          document.title = "Writer Mode";
        }, 500);

        addStyles(
          "writerMode",
          `
            body {
              padding-left: 0;
              overflow: hidden;
            }
            ${selectors.mainColumn} {
              border-style: hidden;
              padding-top: 3vh;
              margin: 0 auto;
            }
            ${selectors.mainWrapper} {
              flex-basis: 100%;
            }
            ${selectors.mainWrapper} > div {
              width: 100%;
              max-width: 100%;
            }
            ${selectors.leftSidebar},
            ${selectors.rightSidebar},
            ${selectors.mainColumn} > div > div:not(:nth-of-type(1)):not(:nth-of-type(2)):not(:nth-of-type(3)) {
              overflow: hidden;
              visibility: hidden;
              opacity: 0;
              width: 0;
              height: 0;
            }
            ${selectors.topHeader} {
              visibility: hidden;
            }
            ${selectors.modalWrapper} {
              width: 100vw;
              max-width: 100vw;
              top: 0;
              border-radius: 0;
            }
            div[role="group"] > div:empty {
              background-color: var(--body-bg-color);
            }
            ${selectors.modalUi} {
              border-radius: 0;
            }
            ${selectors.modalWrapper} > div > div > div {
              padding-bottom: 10vh;
            }
            `
        );

        clearTimeout(t);
        t = setTimeout(() => {
          addTypefullyPlugToWriterMode();
        }, 100);

        break;

      case "off":
        document.removeEventListener("keydown", escKeyListener);

        if (!stylesExist("writerMode")) break;

        clearTimeout(zt2);
        zt2 = setTimeout(() => {
          document.title = "Twitter";
        }, 500);

        removeStyles("writerMode");
        removeTypefullyPlugFromWriterMode();
        break;
    }
  } else {
    removeStyles("writerMode");
    removeTypefullyPlugFromWriterMode();
    return;
  }
};

const addTypefullyPlugToWriterMode = async () => {
  if (window.location.pathname.includes("/home") || window.location.pathname === "/") {
    const main = document.querySelector('main[role="main"]');

    if (!main) return;
    if (document.getElementById("typefully-writermode-link")) return;

    /* ---------------------------- Typefully Button ---------------------------- */

    const typefullyLinkElement = createTypefullyLinkElement("typefully-writermode-link", "typefully-save-draft-button ghost");
    typefullyLinkElement.addEventListener("click", () => {
      getCurrentTextAndSendToTypefully();
    });

    const typefullyLogo = createTypefullyLogo();
    const typefullyText = document.createElement("span");
    typefullyText.innerText = "Save draft to Typefully";

    typefullyLinkElement.appendChild(typefullyLogo);
    typefullyLinkElement.appendChild(typefullyText);

    /* ----------------- Typefully box callout with explanation ---------------- */

    addTypefullyBox(
      main,
      "writer-mode",
      `<ul>
  <li>💬 Share your drafts and get comments</li>
  <li>🤖 Improve your tweets with AI</li>
  <li>📈 Track your growth with insights and metrics</li>
  <li>📆 Schedule for later</li>
</ul>
<p>Powered by <a href="https://typefully.com/?ref=minimal-twitter">Typefully</a>, the makers of the Minimal Twitter extension.</p>`,
      {
        withArrow: true,
      }
    );

    main.appendChild(typefullyLinkElement);
  }
};

const removeTypefullyPlugFromWriterMode = () => {
  const typefullyLinkElement = document.getElementById("typefully-writermode-link");
  typefullyLinkElement && typefullyLinkElement.remove();

  const typefullyBox = document.getElementById("typefully-writermode-box");
  typefullyBox && typefullyBox.remove();
};

// Function to add an expand icon to the buttons in the tweet composer
const addWriterModeButton = async () => {
  const composerButtonInner = document.querySelector(
    `${selectors.mainColumn} nav[role="navigation"] [role="tablist"][data-testid="ScrollSnap-List"] div[role="presentation"]:last-child div[role="button"]`
  );
  // X recently wrapped these buttons in a div
  const composerButton = composerButtonInner?.parentNode;

  if (!composerButton) return;

  if (!window.location.pathname.includes("/home") || !window.location.pathname === "/" || document.getElementById("mt-writer-mode-composer-button")) {
    return;
  }
  const writerModeButton = composerButton.cloneNode(true);
  const userSetting = await getStorage(KeyWriterMode);

  writerModeButton.id = "mt-writer-mode-composer-button";
  writerModeButton.removeAttribute("data-testid");

  if (userSetting === "on") {
    writerModeButton.firstChild.firstChild.firstChild.firstChild.innerHTML = svgAssets.composerWriterMode.selected;

    addTooltip(writerModeButton, {
      id: "writer-mode",
      title: "Close Zen Writer Mode",
    });
  } else {
    writerModeButton.firstChild.firstChild.firstChild.firstChild.innerHTML = svgAssets.composerWriterMode.normal;

    addTooltip(writerModeButton, {
      id: "writer-mode",
      title: "Zen Writer Mode",
      description: "Added by Minimal Twitter.",
    });
  }
  writerModeButton.onclick = toggleWriterMode;

  if (document.querySelector("#mt-writer-mode-composer-button")) {
    writerModeButton.remove();
    return;
  } else {
    composerButton.parentNode.appendChild(writerModeButton);

    addStyles(
      "writer-mode-composer-button-style",
      `
      #mt-writer-mode-composer-button:hover {
        background-color: rgba(var(--accent-color-rgb), 0.1);
        border-radius: 9999px;
      }
      `
    );
  }
};

const toggleWriterMode = async () => {
  const userSetting = await getStorage(KeyWriterMode);

  const writerModeButton = document.querySelector("#mt-writer-mode-composer-button");

  try {
    await setStorage({ writerMode: userSetting === "off" ? "on" : "off" });
  } catch (error) {
    console.error(error);
  }

  if (!writerModeButton) return;

  hideAllTooltips();

  if (userSetting === "off") {
    writerModeButton.firstChild.firstChild.firstChild.innerHTML = svgAssets.composerWriterMode.selected;

    addTooltip(writerModeButton, {
      id: "writer-mode",
      title: "Close Zen Writer Mode",
    });
  } else {
    writerModeButton.firstChild.firstChild.firstChild.innerHTML = svgAssets.composerWriterMode.normal;

    addTooltip(writerModeButton, {
      id: "writer-mode",
      title: "Zen Writer Mode",
      description: "Added by Minimal Twitter.",
    });

    // scroll body to top
    document.body.scrollTop = 0;
  }
};

function addStyleSheet(id, href, text) {
  const head = document.querySelector("head");
  let stylesheet;

  if (href) {
    stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = href;
  } else if (text) {
    stylesheet = document.createElement("style");
    stylesheet.appendChild(document.createTextNode(text));
  }
  stylesheet.id = `mt-${id}-stylesheet`;
  head.appendChild(stylesheet);
  return stylesheet;
}

const extractColor = (selector, varName) => {
  const element = document.querySelector(selector);
  if (element) {
    let color;
    if (varName.includes("bg")) {
      color = window.getComputedStyle(element).backgroundColor;
    } else if (varName.includes("border")) {
      color = window.getComputedStyle(element).borderColor;
    } else {
      color = window.getComputedStyle(element).color;
    }
    const root = document.documentElement;
    const existingColor = root.style.getPropertyValue(`--${varName}-color`);

    if (!existingColor) {
      const colorRgb = color.replace("rgb(", "").replace(")", "");
      root.style.setProperty(`--${varName}-color`, color);
      root.style.setProperty(`--${varName}-color-rgb`, colorRgb);
    }
  }
};

const extractColorsAsRootVars = () => {
  extractColor("body", "body-bg");
  extractColor('[data-testid="primaryColumn"]', "border");
  extractColor("h2 > span", "main-text");
  extractColor("div > span", "main-text");
  extractColor("a > time", "secondary-text");
  extractColor("[data-testid='primaryColumn'] div[aria-haspopup='menu'] > div > div > svg", "secondary-text");
  extractColor("a", "accent");
  extractColor("div > svg", "glyphs");
};

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function hideRightSidebar() {
  const isSearchPage = window.location.pathname === "/search";

  if (isSearchPage) {
    removeStyles("hide-sidebar");
    removeOtherSections();
    setTimeout(() => {
      removeOtherSections();
    }, 500); // Sometimes the trends appear with a delay
  } else {
    if (stylesExist("hide-sidebar")) return;

    addStyles(
      "hide-sidebar",
      `${selectors.rightSidebar} {
        visibility: hidden;
        width: 0;
        margin: 0;
        padding: 0;
        z-index: 1;
      }`
    );
  }
}

function removeOtherSections() {
  const sidebar = document.querySelector(selectors.rightSidebar);
  if (!sidebar) return;
  sidebar.querySelector(`aside[role="complementary"]`)?.parentElement?.remove();
  sidebar.querySelector(`section[role="region"]`)?.parentElement?.parentElement?.remove();
}

function isMutationSkippable(mutationsList) {
  const a = mutationsList[0]?.addedNodes[0]; // First added node
  const r = mutationsList[0]?.removedNodes[0]; // First removed node
  const t = mutationsList[0]?.target; // Target
  const el = a || r; // Element

  try {
    // Minimal Twitter injected elements
    if (
      el?.id?.startsWith("mt-") ||
      t?.id?.startsWith("mt-") ||
      el?.id?.startsWith("typefully-") ||
      t?.className?.startsWith("mt-") // For example .mt-tooltip ends up here
    )
      return true;

    // Engagement counts
    if (t.closest(`[data-testid="like"]`) || t.closest(`[data-testid="retweet"]` || t.closest(`[data-testid="reply"]`))) {
      return true;
    }

    // Inside the sidebar
    if (t.closest(`nav[role="navigation"]`)) return true;

    // Sidebar itself
    if (t?.nodeName === "NAV" && t?.getAttribute("role") === "navigation") return true;

    // <head> changes
    if (t.closest("head")) return true;

    // User Avatar changes
    if (el?.closest("[data-testid^='UserAvatar-Container']") || t?.closest("[data-testid^='UserAvatar-Container']")) return true;

    // Post media
    if (el?.closest("[data-testid='tweetPhoto']")) return true;

    // Images and videos
    if (
      el?.nodeName === "IMG" ||
      t?.nodeName === "IMG" ||
      el?.nodeName === "VIDEO" ||
      el?.firstChild?.nodeName === "VIDEO" ||
      el?.querySelector(":scope > img") ||
      el?.getAttribute("data-testid") === "tweetPhoto" ||
      el?.parentNode?.getAttribute("data-testid") === "tweetPhoto" ||
      t?.closest("[data-testid='videoPlayer']")
    ) {
      return true;
    }

    // Links previews (inside a data-testid="card.wrapper")
    if (el.closest("[data-testid='card.wrapper']")) {
      return true;
    }

    // Added or removed scripts
    if (el?.nodeName === "SCRIPT") return true;

    // Added or removed styles
    if (el?.nodeName === "STYLE") return true;

    // DM drawer
    if (el?.closest("[data-testid='DMDrawer']") || t?.closest("[data-testid='DMDrawer']")) return true;

    // Trends drawer
    if (el?.closest("[data-testid='sidebarColumn']") || t?.closest("[data-testid='sidebarColumn']")) return true;

    // Ignore text only nodes
    if (el?.nodeName === "#text") return true;

    // Ignore info button on tweets
    // it's a > div > div > div[data-testid="caret"]
    if (el?.nodeName === "DIV" && el?.firstChild?.firstChild?.firstChild?.getAttribute("data-testid") === "caret") {
      return true;
    }

    // SVG changes
    if (el?.nodeName === "path") return true;

    return false;
  } catch (e) {}

  return false;
}

const addSmallerSearchBarStyle = () => {
  const searchInput = document.querySelector(selectors.searchBoxInput);

  if (!searchInput) return;

  if (window.location.pathname.includes("/search") || window.location.pathname.includes("/explore")) return;

  if (document.activeElement === searchInput) return;

  const searchBarPlaceholderWidth = searchInput.getAttribute("placeholder").length;

  addStyles(
    "searchInputWidth",
    `${selectors.searchBoxInput} {
      width: ${searchBarPlaceholderWidth + 4}ch;
    }`
  );
};

/*-- 
- Simple utility throttle function with no return value
- Example usage:
  const throttledFunc = throttle(function() {
      // This function will only be called at most once every 1000 milliseconds
  }, 1000)
--*/
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Function to add main stylesheet
const addStylesheets = async () => {
  addStyleSheet("main", chrome.runtime.getURL("css/main.css"));
  addStyleSheet("typefully", chrome.runtime.getURL("css/typefully.css"));

  // Load cached CSS
  const mainStylesheetFromCDN = await fetch("https://raw.githubusercontent.com/typefully/minimal-twitter/main/css/main.css");
  const typefullyStylesheetFromCDN = await fetch("https://raw.githubusercontent.com/typefully/minimal-twitter/main/css/typefully.css");
  const mainText = (await mainStylesheetFromCDN.text()).trim();
  const typefullyText = (await typefullyStylesheetFromCDN.text()).trim();
  addStyleSheet("external", null, mainText.concat("\n\n").concat(typefullyText));
};

const runDocumentMutations = throttle(async () => {
  extractColorsAsRootVars();

  const data = await getStorage([KeyWriterMode, KeyFollowingTimeline, KeyTrendsHomeTimeline, KeyRemoveTimelineTabs]);

  if (data) {
    if (data[KeyWriterMode] === "on") {
      changeWriterMode(data[KeyWriterMode]);
    } else {
      changeTimelineTabs(data[KeyRemoveTimelineTabs], data[KeyWriterMode]);
      changeTrendsHomeTimeline(data[KeyTrendsHomeTimeline], data[KeyWriterMode]);
      changeFollowingTimeline(data[KeyFollowingTimeline]);
      addTypefullyPlug();
    }
  }

  saveCurrentReplyToLink();
  addTypefullyReplyPlug();
  changeHideViewCounts();
  changeRecentMedia();
  hideRightSidebar();
  addSmallerSearchBarStyle();
  addWriterModeButton();

  return;
}, 50);

// Function to start MutationObserver
const addMutationsOnDomChanges = () => {
  const observer = new MutationObserver((mutationsList) => {
    if (!mutationsList.length) return;
    if (isMutationSkippable(mutationsList)) return;
    runDocumentMutations();
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

const addMutationsOnPageLoad = () => {
  // Inject on page load
  document.addEventListener("DOMContentLoaded", () => {
    addSidebarButtons(false);
    runDocumentMutations();
  });
};

// On resize, remove and re-add the sidebar buttons, because their original
// Twitter counterparts styles change programmatically based on window size,
// so we need to re-create them when the window size changes.
const addMutationsOnResize = () => {
  window.addEventListener(
    "resize",
    debounce(() => {
      addSidebarButtons(true);
    }, 50)
  );
};

// Use "forced" when you want to re-add a button even if it's already there
async function addSidebarButtons(forced) {
  const data = await getStorage([KeyListsButton, KeyCommunitiesButton, KeyTopicsButton, KeyXPremiumButton, KeyTypefullyGrowTab]);

  if (!data) return;

  if (data[KeyListsButton] === "on") addListsButton(forced);
  if (data[KeyCommunitiesButton] === "on") addCommunitiesButton(forced);
  if (data[KeyTopicsButton] === "on") addTopicsButton(forced);
  if (data[KeyXPremiumButton] === "on") addXPremiumButton(forced);
  if (data[KeyTypefullyGrowTab] === "on") addAnalyticsButton(forced);
}

const changeCustomCss = (cssText) => {
  const existingStyleEl = document.getElementById("custom-css");
  if (existingStyleEl) {
    existingStyleEl.textContent = cssText;
  } else {
    const externalStylesheet = document.getElementById("mt-external-stylesheet");
    if (!externalStylesheet) return;
    const head = document.querySelector("head");
    const styleEl = document.createElement("style");
    styleEl.id = "custom-css";
    styleEl.textContent = cssText;
    head.insertBefore(styleEl, externalStylesheet.nextSibling);
  }
};

// Function to change Reply Count
const changeReplyCount = (replyCount) => {
  switch (replyCount) {
    case "hide":
      addStyles(
        "replyCount",
        `[data-testid="reply"] span { 
          visibility: hidden;
        }`
      );
      break;

    case "show":
      removeStyles("replyCount");
      break;
  }
};

// Function to change Retweet Count
const changeRetweetCount = (retweetCount) => {
  switch (retweetCount) {
    case "hide":
      addStyles(
        "retweetCount",
        `[href$="/retweets"],
        [href$="/retweets/with_comments"],
        [data-testid="retweet"] span,
        [data-testid="unretweet"] span {
          visibility: hidden; 
        }`
      );
      break;

    case "show":
      removeStyles("retweetCount");
      break;
  }
};

// Function to change Like Count
const changeLikeCount = (likeCount) => {
  switch (likeCount) {
    case "hide":
      addStyles(
        "likeCount",
        `[href$="/likes"][href*="/status/"],
        [data-testid="like"] span,
        [data-testid="unlike"] span {
           visibility: hidden; 
        }`
      );
      break;

    case "show":
      removeStyles("likeCount");
      break;
  }
};

// Function to change Follow Count
const changeFollowCount = (followCount) => {
  switch (followCount) {
    case "hide":
      addStyles(
        "followCount",
        `[href$="/following"][dir][role="link"],
        [href$="/followers"][dir][role="link"] {
          display: none;
        }`
      );
      break;

    case "show":
      removeStyles("followCount");
      break;
  }
};

// Function to change the title notification count
let nt; // Title Notifications timeout
const changeTitleNotifications = (tf) => {
  const run = async () => {
    let setting = tf;

    if (!tf) {
      setting = await getStorage(KeyTitleNotifications);
    }

    const favicon = document.querySelector('link[rel="shortcut icon"]');

    if (setting === "on") {
      favicon.setAttribute("href", favicon.href.replace("twitter.ico", "twitter-pip.2.ico"));
    } else {
      if (document.title.charAt(0) === "(") {
        document.title = document.title.split(" ").slice(1).join(" ");
      }

      if (document.title.charAt(0) === "(") {
        document.title = document.title.split(" ").slice(1).join(" ");
      }

      clearTimeout(nt);
      nt = setTimeout(() => {
        favicon.setAttribute("href", favicon.href.replace("-pip.2", ""));
      });
    }
  };

  run();

  const observer = new MutationObserver(() => {
    run();
  });
  const config = { subtree: true, characterData: true, childList: true };
  const target = document.querySelector("title");

  if (target) observer.observe(target, config);
};

// Function to change to Inter Font
const changeInterFont = (interFont) => {
  switch (interFont) {
    case "on":
      addStyles(
        "interFont",
        `
        @font-face {
          font-family: 'Inter';
          src: url('${chrome.runtime.getURL("fonts/inter-subset.woff2")}') format('woff2');
        }

        div, span, input, textarea {
          font-family: Inter, TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
        }
        `
      );
      break;

    case "off":
      removeStyles("interFont");
      break;
  }
};

// Function to change Tweet Button
const changeTweetButton = (tweetButton) => {
  switch (tweetButton) {
    case "off":
      addStyles(
        "tweetButton",
        `
        [data-testid="SideNav_NewTweet_Button"] {
          visibility: hidden;
        }
        `
      );
      break;

    case "on":
      removeStyles("tweetButton");
      break;
  }
};

const changeHideSearchBar = (searchBar) => {
  switch (searchBar) {
    case "off":
      addStyles(
        "searchBar",
        `${selectors.searchBox} {
          display: none;
          visibility: hidden;
        }`
      );
      addStyles(
        "trendsHomeTimeline-more",
        `@media only screen and (min-width: 1265px) {
          ${selectors.rightSidebar} section[aria-labelledby^="accessible-list-"] {
            top: 12px !important;
          }
          .mt-recentMedia-photoGrid {
            top: 12px !important;
          }
        }`
      );
      break;

    case "on":
      removeStyles("searchBar");
      addStyles(
        "trendsHomeTimeline-more",
        `@media only screen and (min-width: 1265px) {
          ${selectors.rightSidebar} section[aria-labelledby^="accessible-list-"] {
            top: unset;
          }
          .mt-recentMedia-photoGrid {
            top: unset !important;
          }
        }`
      );
      break;
  }
};

const changeTransparentSearchBar = (transparentSearch) => {
  switch (transparentSearch) {
    case "on":
      addStyles(
        "transparentSearch",
        `
        ${selectors.searchBox} > div:nth-child(1) > div {
          background-color: transparent;
        }
        ${selectors.searchBoxInput} {
          transform: translateX(2ch);
          margin-left: -2.5ch;
        }
        `
      );
      break;

    case "off":
      removeStyles("transparentSearch");
      break;
  }
};

// Function to change Typefully Composer Buttons
const changeTypefullyComposerButtons = (typefullyComposerButtons) => {
  switch (typefullyComposerButtons) {
    case "off":
      addStyles(
        "typefullyComposerButtons",
        `
        #typefully-link, 
        #typefully-link-inline,
        #typefully-reply-link, 
        #typefully-writermode-link, 
        #typefully-writermode-box {
          display: none;
        }
        `
      );
      break;

    case "on":
      removeStyles("typefullyComposerButtons");
      break;
  }
};

const injectAllChanges = (data) => {
  changeTimelineWidth(data[KeyTimelineWidth]);
  changeTimelineBorders(data[KeyRemoveTimelineBorders]);
  changeTweetBorders(data[KeyRemoveTweetBorders]);
  changeStickyHeader(data[KeyStickyHeader]);
  changeNavigationButtonsLabels(data[KeyNavigationButtonsLabels]);
  changeNavigationButtonsLabelsHover(data[KeyNavigationButtonsLabelsHover]);
  changeNavigationCenter(data[KeyNavigationCenter]);
  changeUnreadCountBadge(data[KeyUnreadCountBadge]);
  changeWriterMode(data[KeyWriterMode]);

  // Sidebar
  changeSidebarLogo(data[KeySidebarLogo]);
  changeHomeButton(data[KeyHomeButton]);
  changeExploreButton(data[KeyExploreButton]);
  changeNotificationsButton(data[KeyNotificationsButton]);
  changeMessagesButton(data[KeyMessagesButton]);
  changeBookmarksButton(data[KeyBookmarksButton]);
  changeTopArticlesButton(data[KeyTopArticlesButton]);
  changeCommunitiesButton(data[KeyCommunitiesButton]);
  changeTopicsButton(data[KeyTopicsButton]);
  changeListsButton(data[KeyListsButton]);
  changeProfileButton(data[KeyProfileButton]);
  changeXPremiumButton(data[KeyXPremiumButton]);
  changeGrokButton(data[KeyGrokButton]);
  changeVerifiedOrgsButton(data[KeyVerifiedOrgsButton]);
  changeAnalyticsButton(data[KeyTypefullyGrowTab]);

  // Timeline
  changeFollowingTimeline(data[KeyFollowingTimeline]);
  changeHideViewCounts(data[KeyHideViewCount]);
  changeRecentMedia(data[KeyRecentMedia]);
  changeTrendsHomeTimeline(data[KeyTrendsHomeTimeline], data[KeyWriterMode]);
  changePromotedPosts(data[KeyRemovePromotedPosts]);
  changeTopicsToFollow(data[KeyRemoveTopicsToFollow]);
  changeTimelineTabs(data[KeyRemoveTimelineTabs], data[KeyWriterMode]);
  changeTypefullyComposerButtons(data[KeyTypefullyComposerButtons]);
  changeFollowCount(data[KeyFollowCount]);
  changeReplyCount(data[KeyReplyCount]);
  changeRetweetCount(data[KeyRetweetCount]);
  changeLikeCount(data[KeyLikeCount]);

  // Interface
  changeInterFont(data[KeyInterFont]);
  changeHideSearchBar(data[KeySearchBar]);
  changeTransparentSearchBar(data[KeyTransparentSearch]);
  changeTitleNotifications(data[KeyTitleNotifications]);
  changeTweetButton(data[KeyTweetButton]);

  // Advanced
  changeCustomCss(data[KeyCustomCss]);
};

// Utility function to create data for `injectAllChanges()`
function constructNewData(changes) {
  // Creates an array of objects from changes
  // The value of each object is the new value
  const newValuesArray = Object.entries(changes).map((item) => {
    const itemKey = item[0];
    const itemValue = item[1]?.newValue;
    return { [itemKey]: itemValue };
  });

  // Recreate a hash map to pass to `injectAllChanges()`
  const newChangesData = Object.fromEntries(
    newValuesArray.map((item) => {
      const itemKey = Object.keys(item)[0];
      const itemValue = Object.values(item)[0];
      return [itemKey, itemValue];
    })
  );

  return newChangesData;
}

/*--
- Docs: https://developer.chrome.com/docs/extensions/reference/storage/#synchronous-response-to-storage-updates
- Listen to Chrome Storage changes
- Inject styles in respond to changes
--*/
chrome.storage.onChanged.addListener(async (changes) => {
  if (
    changes[KeyExtensionStatus]?.oldValue && // No old value means it's a fresh install
    changes[KeyExtensionStatus]?.newValue !== changes[KeyExtensionStatus]?.oldValue // The status has actually changed
  )
    window.location.reload();

  const status = await getStorage(KeyExtensionStatus);
  if (status === "off") return;

  const newChangesData = constructNewData(changes);
  injectAllChanges(newChangesData);
});

/*--
- Initializing function, runs once at start
- Get Chrome Storage and inject respective styles
--*/
const init = async () => {
  const status = await getStorage(KeyExtensionStatus);
  if (status === "off") return;

  addStylesheets();
  addMutationsOnDomChanges();
  addMutationsOnPageLoad();
  addMutationsOnResize();

  // Inject user preferences
  const allData = await getStorage(allSettingsKeys);
  injectAllChanges(allData);
};

init();
//# sourceMappingURL=main.js.map
