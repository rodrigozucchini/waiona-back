import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
import { ImagesService } from './images.service';
import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { CreateProductImageDto } from '../dto/create-product-image.dto';
import { CreateComboImageDto } from '../dto/create-combo-image.dto';

  
  @Controller('images')
  export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}
  
    // =========================
    // Images CRUD
    // =========================
  
    @Post()
    create(@Body() dto: CreateImageDto) {
      return this.imagesService.create(dto);
    }
  
    @Get()
    findAll() {
      return this.imagesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.imagesService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateImageDto) {
      return this.imagesService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.imagesService.remove(+id);
    }
  
    // =========================
    // Product Images
    // =========================
  
    @Post('product')
    addImageToProduct(@Body() dto: CreateProductImageDto) {
      return this.imagesService.addImageToProduct(dto);
    }
  
    @Get('product/:productId')
    getImagesByProduct(@Param('productId') productId: number) {
      return this.imagesService.getImagesByProduct(+productId);
    }
  
    // =========================
    // Combo Images
    // =========================
  
    @Post('combo')
    addImageToCombo(@Body() dto: CreateComboImageDto) {
      return this.imagesService.addImageToCombo(dto);
    }
  
    @Get('combo/:comboId')
    getImagesByCombo(@Param('comboId') comboId: number) {
      return this.imagesService.getImagesByCombo(+comboId);
    }
  }
  