import { Stock } from '../models/Stock';

describe('Stock', () => {
  // Test case to verify price retrieval for different dates
  test('Should return correct price for a given date', () => {
    // Setup test data with two different dates and prices
    const prices = new Map([
      ['2024-01-01', 100],
      ['2024-01-31', 150]
    ]);
    const stock = new Stock('AAPL', prices);
    
    // Verify that the Price method returns correct values for both dates
    expect(stock.Price('2024-01-01')).toBe(100);
    expect(stock.Price('2024-01-31')).toBe(150);
  });

  // Test case to verify error handling for non-existent dates
  test('Should throw error for non-existent date', () => {
    // Setup test data with only one date
    const prices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', prices);

    // Verify that requesting a non-existent date throws the expected error
    expect(() => {
      stock.Price('2024-02-01');
    }).toThrow('No price available for AAPL on 2024-02-01');
  });

  // Test case to verify proper storage of stock symbol
  test('Should store stock symbol correctly', () => {
    // Setup test data with a sample price
    const prices = new Map([['2024-01-01', 100]]);
    const stock = new Stock('AAPL', prices);
    
    // Verify that the symbol property matches the constructor input
    expect(stock.symbol).toBe('AAPL');
  });

  // Test case to verify proper storage of the prices map
  test('Should store prices map correctly', () => {
    // Setup test data with multiple dates and prices
    const prices = new Map([
      ['2024-01-01', 100],
      ['2024-01-02', 110]
    ]);
    const stock = new Stock('AAPL', prices);
    
    // Verify that the entire prices map matches the constructor input
    expect(stock.prices).toEqual(prices);
  });
});
  