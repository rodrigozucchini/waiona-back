import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { StockAdminService } from './stock.admin.service';
import { CreateStockAdminDto } from '../dto/create-stock.admin.dto';
import { UpdateStockAdminDto } from '../dto/update-stock.admin.dto';
import { CreateStockParameterAdminDto } from '../dto/create-stock-parameter-admin.dto';
import { UpdateStockParameterAdminDto } from '../dto/update-stock-parameter.admin.dto';
import { CreateStockMovementAdminDto } from '../dto/create-stock-movement-admin.dto';
import { CreateStockLossAdminDto } from '../dto/create-stock-loss-admin.dto';

@Controller('admin/stock')
export class StockAdminController {
  constructor(private readonly stockAdminService: StockAdminService) {}

  @Post()
  createStock(@Body() dto: CreateStockAdminDto) {
    return this.stockAdminService.createStock(dto);
  }

  @Get()
  findAllStocks() {
    return this.stockAdminService.findAllStocks();
  }

  @Get(':id')
  findOneStock(@Param('id', ParseIntPipe) id: number) {
    return this.stockAdminService.findOneStock(id);
  }

  @Put(':id')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStockAdminDto,
  ) {
    return this.stockAdminService.updateStockQuantity(id, dto.quantity);
  }

  @Delete(':id')
  removeStock(@Param('id', ParseIntPipe) id: number) {
    return this.stockAdminService.removeStock(id);
  }
}

@Controller('admin/stock-parameters')
export class StockParametersAdminController {
  constructor(private readonly stockAdminService: StockAdminService) {}

  @Post()
  create(@Body() dto: CreateStockParameterAdminDto) {
    return this.stockAdminService.createStockParameter(dto);
  }

  @Get()
  findAll() {
    return this.stockAdminService.findAllStockParameters();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stockAdminService.findOneStockParameter(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStockParameterAdminDto,
  ) {
    return this.stockAdminService.updateStockParameter(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.stockAdminService.removeStockParameter(id);
  }
}

@Controller('admin/stock-movements')
export class StockMovementsAdminController {
  constructor(private readonly stockAdminService: StockAdminService) {}

  @Post()
  create(@Body() dto: CreateStockMovementAdminDto) {
    return this.stockAdminService.createStockMovement(dto);
  }

  @Get()
  findAll() {
    return this.stockAdminService.findAllStockMovements();
  }
}

@Controller('admin/stock-losses')
export class StockLossesAdminController {
  constructor(private readonly stockAdminService: StockAdminService) {}

  @Post()
  create(@Body() dto: CreateStockLossAdminDto) {
    return this.stockAdminService.createStockLoss(dto);
  }

  @Get()
  findAll() {
    return this.stockAdminService.findAllStockLosses();
  }
}
