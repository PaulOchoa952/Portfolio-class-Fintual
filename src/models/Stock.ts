export class Stock {
    // Stock symbol (e.g., 'AAPL' for Apple)
    symbol: string;
  
    // Map to store prices by date (format: 'YYYY-MM-DD' => price)
    prices: Map<string, number>;
  
    /**
     * Creates a new Stock instance
     * @param symbol - The stock symbol (e.g., 'AAPL')
     * @param prices - Map of dates to prices
     */
    constructor(symbol: string, prices: Map<string, number>) {
      this.symbol = symbol;
      this.prices = prices;
    }
  
    /**
     * Gets the price of the stock for a specific date
     * @param date - The date in format 'YYYY-MM-DD'
     * @returns The stock price for the given date
     * @throws Error if no price is available for the given date
     */
    Price(date: string): number {
      const price = this.prices.get(date);
      if (price === undefined) {
        throw new Error(`No price available for ${this.symbol} on ${date}`);
      }
      return price;
    }
  }
  