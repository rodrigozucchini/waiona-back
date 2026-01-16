export type PriceOperation = (amount: number , value: number) => number;

export const addPercentage: PriceOperation = (a, v) => a * (1 + v / 100);