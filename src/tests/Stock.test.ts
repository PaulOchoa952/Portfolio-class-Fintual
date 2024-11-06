import { Stock } from '../models/Stock';

describe('Stock', () => {
  test('Should return correct price for a given date', () => {
    const prices = new Map([
      ['2024-01-01', 100],
      ['2024-01-31', 150]
    ]);
    const stock = new Stock('AAPL', prices);
    
    expect(stock.Price('2024-01-01')).toBe(100);
    expect(stock.Price('2024-01-31')).toBe(150);
  });

  test('Should throw error for non-existent date', () => {
    const prices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', prices);

    expect(() => {
      stock.Price('2024-02-01');
    }).toThrow('No price available for AAPL on 2024-02-01');
  });

  test('Should store stock symbol correctly', () => {
    const prices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', prices);
    
    expect(stock.symbol).toBe('AAPL');
  });

  test('Should store prices map correctly', () => {
    const prices = new Map([
      ['2024-01-01', 100],
      ['2024-01-02', 110]
    ]);
    const stock = new Stock('AAPL', prices);
    
    expect(stock.prices).toEqual(prices);
  });
});
  