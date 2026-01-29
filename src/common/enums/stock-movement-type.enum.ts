export enum StockMovementType {
  IN = 'IN',                 // ingreso inicial / compra
  OUT = 'OUT',               // egreso manual
  SALE = 'SALE',             // venta
  LOSS = 'LOSS',             // rotura / vencimiento
  ADJUSTMENT = 'ADJUSTMENT', // corrección por error
}