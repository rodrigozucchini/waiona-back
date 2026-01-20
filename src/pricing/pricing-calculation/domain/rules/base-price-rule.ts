import { PriceOperation } from '../strategies/price-operations';
import { PriceRule } from './price-rule.interface';

export abstract class BasePriceRule implements PriceRule {
  protected constructor(
    protected readonly value: number,
    protected readonly operation: PriceOperation,
  ) {}

  apply(amount: number): number {
    return this.operation(amount, this.value);
  }
}
