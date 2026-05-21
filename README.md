# 🍎 Pantry Tracker API

A robust backend solution for intelligent food inventory management. This system helps users track expiration dates, categorize item freshness, and optimize grocery consumption through automated status calculations.

## Key Features
- **Smart Expiration Logic**: Automatically classifies items as `EXPIRED`, `CRITICAL`, or `FRESH` based on real-time data.
- **Advanced Filtering**: Optimized query builders for retrieving items by status (e.g., "Show me everything expiring in 7 days").
- **Date Precision**: Built-in UTC normalization to ensure consistency across different time zones.

## Tech Stack
- **Language**: TypeScript 
- **Runtime**: Node.js
- **ORM**: Prisma
- **Testing**: Vitest (Unit Testing with Fake Timers)
- **Architecture**: Repository Pattern + Service Layer

## Testing Suite
The project prioritizes reliability. We use **Vitest** to run a comprehensive suite of unit tests that validate our business logic.

To ensure deterministic results regardless of when the tests are run, we implement **Fake Timers** to freeze the system clock during execution.

- User Authentication Module
- Item Tracking Module

```bash
# Run all tests
pnpm test

# Run tests in UI mode
pnpm exec vitest --ui

I will continue building the api following the same architecture patterns...
