function handleCtrlEnter(event) {
  if (event.target.tagName !== "TEXTAREA") {
    return;
  }

  const isOnlyEnter = event.code == "Enter" && !(event.ctrlKey || event.metaKey);

  if (isOnlyEnter) {
    // stopPropagation for both Windows and Mac
    event.stopPropagation();
  }
}

function enableSendingWithCtrlEnter() {
  document.addEventListener("keydown", handleCtrlEnter, { capture: true });
}

function disableSendingWithCtrlEnter() {
  document.removeEventListener("keydown", handleCtrlEnter, { capture: true });
}

chrome.storage.sync.get("isEnabled", (data) => {
  const isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
  if (isEnabled) {
    enableSendingWithCtrlEnter();
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && "isEnabled" in changes) {
    const isEnabled = changes.isEnabled.newValue;
    if (isEnabled) {
      enableSendingWithCtrlEnter();
    } else {
      disableSendingWithCtrlEnter();
    }
  }
});
