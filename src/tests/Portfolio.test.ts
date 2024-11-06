import { Stock } from '../models/Stock';
import { Portfolio } from '../models/Portfolio';

describe('Portfolio', () => {
  test('Calculate profit between two dates', () => {
    const stockPrices = new Map([
      ['2024-01-01', 100],
      ['2024-01-31', 150],
    ]);
    const stock = new Stock('AAPL', stockPrices);
    const portfolio = new Portfolio([stock]);

    expect(portfolio.Profit('2024-01-01', '2024-01-31')).toBe(50);
  });

  test('Calculate profit with multiple stocks', () => {
    const stock1Prices = new Map([
      ['2024-01-01', 100],
      ['2024-01-31', 150],
    ]);
    const stock2Prices = new Map([
      ['2024-01-01', 200],
      ['2024-01-31', 220],
    ]);
    const stock1 = new Stock('AAPL', stock1Prices);
    const stock2 = new Stock('GOOGL', stock2Prices);
    const portfolio = new Portfolio([stock1, stock2]);

    expect(portfolio.Profit('2024-01-01', '2024-01-31')).toBe(70); // (150-100) + (220-200)
  });

  test('Should throw error for invalid dates', () => {
    const stockPrices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', stockPrices);
    const portfolio = new Portfolio([stock]);

    expect(() => {
      portfolio.Profit('2024-01-31', '2024-01-01');
    }).toThrow('Start date must be before or equal to end date');
  });
});
