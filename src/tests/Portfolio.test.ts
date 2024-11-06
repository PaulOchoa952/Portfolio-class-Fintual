import { Stock } from '../models/Stock';
import { Portfolio } from '../models/Portfolio';

describe('Portfolio', () => {
  // Test case for basic annualized return calculation
  test('Calculate annualized return between two dates', () => {
    // Setup test data: 10% return in 30 days
    const stockPrices = new Map([
      ['2024-01-01', 100],
      ['2024-01-31', 110],
    ]);
    const stock = new Stock('AAPL', stockPrices);
    const portfolio = new Portfolio([stock]);

    const annualizedReturn = portfolio.Profit('2024-01-01', '2024-01-31');
    // Expected: (1 + 0.1)^(365/30) - 1 ≈ 3.1379 (313.79%)
    expect(annualizedReturn).toBeCloseTo(3.1379, 4);
  });

  // Test case for multiple stocks in portfolio
  test('Calculate annualized return with multiple stocks', () => {
    // Setup test data: 
    // Stock 1: 20% return in 182 days
    // Stock 2: 10% return in 182 days
    const stock1Prices = new Map([
      ['2024-01-01', 100],
      ['2024-07-01', 120],
    ]);
    const stock2Prices = new Map([
      ['2024-01-01', 200],
      ['2024-07-01', 220],
    ]);
    const stock1 = new Stock('AAPL', stock1Prices);
    const stock2 = new Stock('GOOGL', stock2Prices);
    const portfolio = new Portfolio([stock1, stock2]);

    const annualizedReturn = portfolio.Profit('2024-01-01', '2024-07-01');
    // Initial portfolio value: 300
    // Final portfolio value: 340
    // Total return: 13.33% in 182 days
    // Expected: (1 + 0.1333)^(365/182) - 1 ≈ 0.2834 (28.34%)
    expect(annualizedReturn).toBeCloseTo(0.2834, 4);
  });

  // Test case for invalid date order
  test('Should throw error for invalid dates', () => {
    const stockPrices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', stockPrices);
    const portfolio = new Portfolio([stock]);

    expect(() => {
      portfolio.Profit('2024-01-31', '2024-01-01');
    }).toThrow('Start date must be before or equal to end date');
  });

  // Test case for same-day returns
  test('Should handle same day returns', () => {
    const stockPrices = new Map([
      ['2024-01-01', 100],
      ['2024-01-01', 100],
    ]);
    const stock = new Stock('AAPL', stockPrices);
    const portfolio = new Portfolio([stock]);

    const annualizedReturn = portfolio.Profit('2024-01-01', '2024-01-01');
    expect(annualizedReturn).toBe(0); // Same day return should be 0
  });
});
