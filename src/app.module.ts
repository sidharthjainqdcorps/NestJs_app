import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsController } from './products/products.controller';
import { TestModule } from './test/test.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [TestModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService,ProductsService], // remeber to see any service file created to be in app.module Module
})
export class AppModule {}
