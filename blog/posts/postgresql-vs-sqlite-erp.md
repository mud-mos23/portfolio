---
title: "PostgreSQL vs SQLite for ERP: When Simple Is Better"
date: "2026-07-08"
excerpt: "PostgreSQL is the default choice for ERP. But SQLite deserves a closer look, especially for small and medium businesses."
---

I chose **SQLite** for [Bubely ERP](https://github.com/mud-mos23/bubely-erp). This surprised some people. Here's why.

## The Argument for PostgreSQL

- Concurrent write access from multiple users
- Role-based access control
- Better performance at scale
- Features like window functions, CTEs, full-text search

All valid. For a 500-person company, use PostgreSQL.

## The Argument for SQLite

For a **small business ERP** (1-20 users):

- **Zero configuration** — no server to install, no credentials to manage
- **Backup is a file copy** — literally `cp db.sqlite3 backup.db`
- **Performance is excellent** — SQLite handles 50+ concurrent readers easily
- **The entire ERP fits in a Git repo** — version control for your database

## The Decision Framework

| Factor | Choose SQLite | Choose PostgreSQL |
|--------|---------------|-------------------|
| Users | 1-20 | 20+ |
| Deployment | On-prem, single machine | Network, cloud |
| IT support | Limited | Dedicated DBA |
| Data size | < 100 GB | Any |

[SQLite's own documentation](https://www.sqlite.org/whentouse.html) is refreshingly honest about limitations.

Sometimes the best architecture is the simplest one that works.

