import { IsNumber, Min, Max } from 'class-validator';

export class UpdateMarginAdminDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100)
  value: number;
}
