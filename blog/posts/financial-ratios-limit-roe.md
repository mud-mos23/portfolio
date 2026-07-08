---
title: "The Problem with Financial Ratios: What ROE Doesn't Tell You"
date: "2026-07-08"
excerpt: "ROE is the most-watched financial metric. It's also one of the most misleading when viewed in isolation."
---

[FinDash](https://github.com/mud-mos23/financial-dashboard) calculates ROE, ROA, and other ratios automatically. But the numbers need context.

## ROE = Net Income / Shareholders' Equity

A high ROE can mean:
- The company is generating strong profits from equity (good)
- The company is dangerously leveraged (potentially very bad)

## The DuPont Decomposition

Breaking ROE into components reveals the truth:

```
ROE = Profit Margin × Asset Turnover × Financial Leverage
```

A ROE of 25% driven by 2.5× leverage is very different from one driven by 15% profit margins.

## What I Built

FinDash shows the **trend** of each ratio over 5 years, plus alerts when:
- ROE changes significantly year-over-year
- Debt ratio exceeds 50%
- Current ratio drops below 1.0

[The DuPont analysis method](https://www.investopedia.com/terms/d/dupontanalysis.asp) has been used since 1919 and remains one of the most reliable ways to understand ROE.

Never trust a single ratio. Always ask: "What's driving this number?"

