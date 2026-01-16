import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { CombosService } from './combos.service';
  import { CreateComboDto } from './dto/create-combo.dto';
  import { UpdateComboDto } from './dto/update-combo.dto';
  import { UpdateComboProductDto } from './dto/update-combo-product.dto';
  import { AddProductToComboDto } from './dto/add-product-combo.dto';
  
  @Controller('combos')
  export class CombosController {
    constructor(private readonly combosService: CombosService) {}
  
    // =========================
    // Combos CRUD
    // =========================
  
    @Post()
    create(@Body() dto: CreateComboDto) {
      return this.combosService.create(dto);
    }
  
    @Get()
    findAll() {
      return this.combosService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.combosService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateComboDto) {
      return this.combosService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.combosService.remove(+id);
    }
  
    // =========================
    // Combo Products
    // =========================
  
    @Post('product')
    addProductToCombo(@Body() dto: AddProductToComboDto) {
      return this.combosService.addProductToCombo(dto);
    }
  
    @Patch('product/:id')
    updateComboProduct(
      @Param('id') id: number,
      @Body() dto: UpdateComboProductDto,
    ) {
      return this.combosService.updateComboProduct(+id, dto);
    }
  
    @Delete('product/:id')
    removeComboProduct(@Param('id') id: number) {
      return this.combosService.removeComboProduct(+id);
    }
  
    @Get(':id/products')
    getProductsByCombo(@Param('id') id: number) {
      return this.combosService.getProductsByCombo(+id);
    }
  }
  