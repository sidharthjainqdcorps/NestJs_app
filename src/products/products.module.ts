// TO CREATE A module via cli - nest g module products or nest g m products -- m or module both will work

import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    controllers :[ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
