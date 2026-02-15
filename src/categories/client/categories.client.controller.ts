import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { CategoriesClientService } from './categories.client.service';

@Controller('client/categories')
export class CategoriesClientController {
  constructor(
    private readonly categoriesClientService: CategoriesClientService,
  ) {}

  @Get()
  findAll() {
    return this.categoriesClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesClientService.findOne(id);
  }
}
