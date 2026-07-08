---
title: "Security by Obscurity Doesn't Work for ERP Systems"
date: "2026-07-08"
excerpt: "ERP systems hold the crown jewels of any business. Yet most small business ERPs have alarmingly weak security."
---

After building [Bubely ERP](https://github.com/mud-mos23/bubely-erp) and studying other open source ERPs, I'm concerned about security practices.

## The Problems

1. **Default credentials** — admin/admin is still comically common
2. **No audit logging** — who approved that purchase order? Nobody knows.
3. **Direct database access** — applications connecting as root
4. **No rate limiting** — brute force attacks on login pages succeed more often than they should

## What Every ERP Needs

Based on [OWASP guidelines](https://owasp.org/www-project-top-ten/):
- **Role-based access control** — not just user vs admin
- **Immutable audit logs** — append-only, tamper-evident
- **Password policies** — enforced complexity, rotation, MFA
- **Parameterized queries** — SQL injection is still #1 in 2026

## Bubely's Approach

- Django's built-in auth with permission system
- Admin interface disabled in production by default
- SQL injection impossible via ORM
- Session security with HTTP-only cookies

Security isn't a feature. It's a property of good architecture.

[The CISA ERP security guide](https://www.cisa.gov/erp-security) is required reading for anyone building or deploying ERP systems.

