# Text Eclipse #

![moon](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/waning-crescent-moon-symbol_1f318.png)


## What is it? ##
Chrome extension that styles multiple sets of words on a page.

## Why did we make it? ##
- **Original Idea**: quickly redact/highlight ingredients from a resturant menu or recipe based on a set of rules.
- **Expanded idea (WIP)**: highlighting google search terms when you click on a result.


## How does it work? ##
#### Long version ####
On page load the extension will check the chrome `tabs` API for permission to access page level DOM.  If permission is allowed the `content_script` will request a set of matches from `StorageService`.  The `content_script` will then parse the DOM of the active page to find matches of search strings in `TextNodes`.  After list of matches is found it will then wrap the matched serach terms in `<span>` elements with inline styling and re-render to the page.

#### TL;DR ####
- Check permissions
- Grab matches from storage
- Parse DOM nodes
- Wrap search terms in `<span>`

## Features ##
- [x] Dynamic access to active page DOM tree
- [x] Efficiently searching for matches (`Document.createTreeWalker()`)
- [x] `chrome.storage.sync` API to keep your search terms
- [x] Basic options page to add/remove styles and matches
- [ ] Extracting search terms from previous google search
- [ ] Expand settings page to allow modification
- [x] RegEx search support
- [ ] Multiple terms in one `TextNode`
- [ ] `<span>` clean up
- [ ] Unit testing
- [ ] Chrome Web Store
