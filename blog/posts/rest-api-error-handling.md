---
title: "Why Your REST API Needs Better Error Handling"
date: "2026-07-08"
excerpt: "Poor error handling is the most common API problem I see. It's also the easiest to fix."
---

After building APIs for [MusicPliz](https://github.com/mud-mos23/musicpliz), [FinDash](https://github.com/mud-mos23/financial-dashboard), and [Bubely ERP](https://github.com/mud-mos23/bubely-erp), I've seen the same error handling mistakes repeated.

## The Problem

```json
{
  "error": "Something went wrong"
}
```

This error tells the client nothing. Is it:
- A validation error (4xx)?
- A server error (5xx)?
- An authentication error (401)?
- A not-found error (404)?

## The Fix

```json
{
  "status": 422,
  "code": "VALIDATION_ERROR",
  "message": "Amount must be a positive number",
  "field": "amount",
  "details": {"received": -500}
}
```

## Principles

1. **Always use HTTP status codes correctly** — 4xx for client errors, 5xx for server errors
2. **Include a machine-readable error code** — for programmatic handling
3. **Include a human-readable message** — for debugging
4. **Include actionable details** — what field failed, what was expected, what was received

[The IETF RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) defines the Problem Details standard for HTTP APIs. Use it.

It takes 15 minutes to implement proper error handling. It saves hours of debugging. Every time.

