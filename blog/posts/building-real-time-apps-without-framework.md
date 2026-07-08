---
title: "Building Real-Time Apps Without a Framework"
date: "2026-07-08"
excerpt: "You don't always need a framework for real-time features. Sometimes raw WebSockets are cleaner."
---

I built [Real-Time PHP](https://github.com/mud-mos23/real-time-php) to explore this question: when should you use a framework vs raw WebSockets?

## The Framework Bias

Most tutorials jump straight to Socket.io, Laravel Echo, or SignalR. These are great for complex apps. But for simple real-time features, they add unnecessary complexity.

## When Raw WebSockets Win

- **Broadcasting notifications** — a server push to all connected clients
- **Simple dashboards** — periodic data updates from server to client
- **Status indicators** — online/offline presence

## The Pattern

```javascript
// Client
const ws = new WebSocket('ws://server:8080');
ws.onmessage = (event) => {
  updateDashboard(JSON.parse(event.data));
};
```

```php
// Server (with Ratchet)
$loop->addPeriodicTimer(5, function() use ($clients) {
  $data = getLatestMetrics();
  foreach ($clients as $client) {
    $client->send(json_encode($data));
  }
});
```

## The Trade-off

| Using a framework | Raw WebSockets |
|-------------------|----------------|
| Auto-reconnection | Manual reconnection |
| Room/channel management | Custom implementation |
| Fallback transport | Must handle yourself |

For Bubely's dashboard, I used periodic polling. It's simpler, works everywhere, and for a 5-second refresh interval, the overhead is negligible.

Don't add a framework until you need it. [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) is already in every browser.

