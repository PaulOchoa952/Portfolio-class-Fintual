export class Stock {
    symbol: string;
    prices: Map<string, number>; // precios por fecha
  
    constructor(symbol: string, prices: Map<string, number>) {
      this.symbol = symbol;
      this.prices = prices;
    }
  
    // Método que devuelve el precio de la acción en una fecha específica
    Price(date: string): number {
      const price = this.prices.get(date);
      if (price === undefined) {
        throw new Error(`No price available for ${this.symbol} on ${date}`);
      }
      return price;
    }
  }
  