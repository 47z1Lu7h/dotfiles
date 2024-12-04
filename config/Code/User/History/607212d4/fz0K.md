---
title: Navigation
permalink: /docs/en/navigation
key: docs-navigation
---

There are two types of navigation in TeXt: **Header Navigation** and **Sidebar Navigation**, both are defined in *data/navigation.yml*.

<!--more-->

## Header Navigation

Header navigation is defined under the `header` key in *data/navigation.yml*, it is an array of title(s) and url:

yaml
header:
  - title:      Docs
    url:        /docs/en/quick-start
  - titles:
      en:       Archive
    url:        /archive.html
  - titles:
      en:       About
    url:        /about.html
  - title:      GitHub
    url:        https://github.com/47z1lu7h

You can use `titles` for a multi-language name.

## Sidebar Navigation

To use sidebar navigation, you should first define a navigation in *data/navigation.yml*.

```yaml
docs-en:
  - title:      Start
    children:
      - title:  Quick Start
        url:    /docs/en/quick-start
      - title:  Structure
        url:    /docs/en/structure
      ...
  - title:      Customization
    children:
      - title:  Configuration
        url:    /docs/en/configuration
      - title:  Navigation
        url:    /docs/en/navigation
      ...
```

And then use the defined navigation as article’s sidebar navigation in the Front Matter:

```yaml
sidebar:
  nav: docs-en
```
