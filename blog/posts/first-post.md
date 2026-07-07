---
title: "Building MusicPliz — A YouTube Music Player for the Web"
date: "2026-07-07"
excerpt: "How I built a web-based YouTube Music player with React Native, a Spotify-inspired UI, and yt-dlp audio streaming."
---

When I set out to build **MusicPliz**, the goal was simple: create a web-based music player that streams real audio from YouTube Music, with a UI that feels as polished as Spotify.

## The Tech Stack

- **React Native Web** + **Expo** for the UI
- **YouTube.js** for the YouTube Music API (search, albums, suggestions)
- **yt-dlp** for audio URL extraction
- **Zustand** for state management
- **React Navigation** for routing

## The Challenge: Audio Streaming

The hardest part was audio. YouTube doesn't give you direct audio URLs — they need to be "deciphered" from streaming data. YouTube.js does this internally, but it requires a JavaScript interpreter to run the player's decipher function. Without one, `streaming_data.adaptive_formats` URLs come back empty.

The solution? **yt-dlp**. It's a Python tool that handles all of YouTube's anti-scraping measures. I integrated it into the proxy server:

```javascript
const child = execFile('yt-dlp', [
  '-f', 'bestaudio[ext=m4a]/bestaudio',
  '--get-url',
  `https://www.youtube.com/watch?v=${videoId}`,
], cb);
```

This returns a real, playable audio URL that works in any browser's `<audio>` element.

## The Design

I redesigned the UI to match **Spotify's web player**:

- Pure black background (`#000`)
- Green accent (`#1DB954`)
- Fixed bottom player bar with progress, album art, and controls
- Clean cards with minimal border radius
- Monochrome navigation icons

## What's Next

- Synced lyrics display
- Queue management
- Audio quality selection
- Mobile apps for Android & iOS

The full source is on [GitHub](https://github.com/mud-mos23/musicpliz).
