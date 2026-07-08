---
title: "Machine Learning for Auditing: Where It Works and Where It Doesn't"
date: "2026-07-08"
excerpt: "Big Four firms all claim AI-powered auditing. But the reality of ML in audit is more limited than the marketing suggests."
---

I built two audit-adjacent tools: [FraudShield](https://github.com/mud-mos23/fraud-detection) (fraud detection) and [AuditFlow](https://github.com/mud-mos23/audit-automatique) (automatic audit). Combined, they taught me where ML adds value in auditing — and where it doesn't.

## Where ML Works

1. **Transaction-level anomaly detection** — Isolation Forest on journal entries catches outliers humans miss
2. **Duplicate detection** — MD5 hashing across multiple fields catches near-duplicates
3. **Stratified sampling** — ML can optimize sample selection for substantive testing

## Where ML Doesn't Work

1. **Control testing** — evaluating whether a control is well-designed requires judgment
2. **Estimation accuracy** — ML can't determine if a warranty provision is adequate
3. **Fraud motivation** — ML sees patterns, not intent

## The Right Mix

[AuditFlow](https://github.com/mud-mos23/audit-automatique) uses deterministic rules (PCG compliance, equation balancing, class coherence) rather than ML, because audit rules are known and shouldn't be probabilistic.

[FraudShield](https://github.com/mud-mos23/fraud-detection) uses ML because fraud patterns are unknown and evolving.

The rule: if you can write a deterministic check, don't use ML. Reserve ML for cases where the "normal" pattern is unknown or changing.

The [IIA's position paper on AI in auditing](https://www.theiia.org/en/content/position-papers/2022/artificial-intelligence-in-internal-audit/) reaches similar conclusions.

