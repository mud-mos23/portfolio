---
title: "The Real Problem with Chatbots in ERP Systems"
date: "2026-07-08"
excerpt: "Every ERP vendor is adding a chatbot. Most are useless. Here's why — and what would actually help."
---

Salesforce has Einstein. SAP has Joule. Oracle has... something. Every ERP vendor now has an AI chatbot.

## The Problem

Most ERP chatbots are **search interfaces with personalities**. They answer questions like:
- "What's my PTO balance?"
- "Show me last month's sales"

This is marginally useful. But it's not transformative.

## What Would Actually Help

After building the AI module in [Bubely ERP](https://github.com/mud-mos23/bubely-erp), I identified three genuinely useful chatbot applications:

1. **Anomaly explanation** — "Why was this transaction flagged?" should trigger an explanation of the ML model's decision
2. **Process guidance** — "How do I create a purchase order?" should walk through the actual workflow
3. **Report generation** — "Create a budget vs actual report for Q1" should generate and format it

## The AI Module

Bubely's AI module focuses on the first use case: explaining why anomalies were detected. The [AnomalyAlert model](https://github.com/mud-mos23/bubely-erp/blob/main/ai/models.py) stores severity, module, and resolution status for each detected issue.

The best chatbot is one that makes your existing system more accessible, not one that replaces it.

[Research on ERP chatbot effectiveness](https://www.researchgate.net/publication/355843211_Chatbots_in_Enterprise_Resource_Planning) shows that task-oriented bots outperform general-purpose ones by 3:1 in user satisfaction.

