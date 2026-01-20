export interface PriceRule {
  apply(amount: number): number;
}
