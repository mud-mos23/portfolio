---
title: "The Real Problem with React Native Web"
date: "2026-07-08"
excerpt: "React Native Web promises write once, run anywhere. After building MusicPliz, I have thoughts."
---

I built [MusicPliz](https://github.com/mud-mos23/musicpliz) with React Native Web. It worked — but not without friction.

## What Works

- **Shared logic across platforms** — state management, API calls, navigation structure
- **Component model** — reusable UI pieces with clear interfaces
- **Hot reload** — development speed is genuinely impressive

## What Doesn't

Three specific pain points:

1. **CSS compatibility** — `flex: 1` in React Native maps to `height: 100%` in CSS, but the mapping breaks with complex layouts. My Spotify-style mini-player required significant CSS overrides.

2. **Audio element** — React Native's `Audio` API doesn't exist on web. I had to use `<audio>` directly with `dangerouslySetInnerHTML` workarounds.

3. **Build tooling** — Expo for web works but the bundle size is 2-3x larger than a comparable vanilla React app.

## The Verdict

React Native Web is **excellent for prototyping** and **serviceable for production** — if you accept that you'll write platform-specific code for audio, video, and complex animations.

[The official documentation](https://necolas.github.io/react-native-web/) is honest about these limitations.

For MusicPliz, the trade-off was worth it: I got a working music player on both web and mobile from one codebase. But I spent 30% of the time on web-specific fixes.

If your primary target is web, use React. If you need both, React Native Web works — just budget for platform-specific work.

