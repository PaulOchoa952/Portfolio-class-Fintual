import { Stock } from './Stock';

export class Portfolio {
  // Array to store the stocks in the portfolio
  stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }

  /**
   * Calculates the annualized return of the portfolio between two dates
   * Formula: (1 + totalReturn)^(365/numberOfDays) - 1
   * 
   * @param startDate - The initial date in format 'YYYY-MM-DD'
   * @param endDate - The final date in format 'YYYY-MM-DD'
   * @returns The annualized return as a decimal (e.g., 0.1 for 10% return)
   * @throws Error if dates are invalid or if price data is missing
   */
  Profit(startDate: string, endDate: string): number {
    // Validate that start date is not after end date
    if (new Date(startDate) > new Date(endDate)) {
      throw new Error('Start date must be before or equal to end date');
    }

    // Calculate total portfolio value at start and end dates
    let startValue = 0;
    let endValue = 0;

    this.stocks.forEach((stock) => {
      const startPrice = stock.Price(startDate);
      const endPrice = stock.Price(endDate);
      
      // Validate that we have price data for both dates
      if (startPrice === 0 || endPrice === 0) {
        throw new Error(`No price data available for stock ${stock.symbol} on given dates`);
      }
      
      startValue += startPrice;
      endValue += endPrice;
    });

    // Calculate total return as a percentage
    const totalReturn = (endValue - startValue) / startValue;

    // Calculate number of days between dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDiff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    // If same day, return 0 to avoid division by zero
    if (daysDiff === 0) return 0;

    // Calculate annualized return using the formula
    const annualizedReturn = Math.pow(1 + totalReturn, 365/daysDiff) - 1;

    return annualizedReturn;
  }
}

