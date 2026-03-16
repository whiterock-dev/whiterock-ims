# Changelog

## [1.0.0] - 2026-03-13

### Delivered
- Built inventory planning workflows across dashboard, SKU management, warehouses, purchase orders, and stock history.
- Added PO grouping (UID), planning calculations, status transitions, archive/restore flows, and multi-item PO entry.
- Integrated Firebase Authentication + Firestore with backend API routes, member access controls, and seeding utilities.

### Tech Debt / Known Issues
- Backend dependency audit reports low-severity transitive issues that require a major-version dependency change.
- Repository currently contains both `src/` and `frontend/src/` app workspaces, which should be consolidated in a later cleanup.
- No automated test suite is configured yet; verification is currently build/lint/manual-run based.

---

*Developed by [Nerdshouse Technologies LLP](https://nerdshouse.com)*
