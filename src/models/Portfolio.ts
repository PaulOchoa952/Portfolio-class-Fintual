import { Stock } from './Stock';

export class Portfolio {
  stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }

  Profit(startDate: string, endDate: string): number {
    if (new Date(startDate) > new Date(endDate)) {
      throw new Error('Start date must be before or equal to end date');
    }

    let profit = 0;
    this.stocks.forEach((stock) => {
      const startPrice = stock.Price(startDate);
      const endPrice = stock.Price(endDate);
      if (startPrice === 0 || endPrice === 0) {
        throw new Error(`No price data available for stock ${stock.symbol} on given dates`);
      }
      profit += endPrice - startPrice;
    });
    return profit;
  }
}

