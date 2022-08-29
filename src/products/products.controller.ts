import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Redirect, Req, Res } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './inerfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products') // base path = 'products'
export class ProductsController {
    //using product service here -- injecting dependency by using contructor 
    constructor(
        private productService : ProductsService
    ){}

    // @Post()
    // create(): string{
    //     return 'New Product Endpoint!!';
    // }
    
    // posting fields
    @Post()
    async create(
        //after DTO and interfce creation -- Promise has to be returned after dto file and async await to be used
        @Body() product: CreateProductDto) : Promise<Product[]> // Body decorator by nestjs // DTO = data transfer object
     {
        return this.productService.create(product);
        
        // return 'New Product Endpoint!!';
        
        // all below dummy data details after Body decorator and DTO creation will be created by api now.
        // return this.productService.create({
        //     id:'1',
        //     name:"Mavbook pro",
        //     qty:1,
        //     prine:100000
        // });
    }

    // //custom decorators Http codes,status put explicitly and Header Authorization
    // @Post()
    // @HttpCode(204)
    // @Header('Authorization','Bearer XADSADAGSFS$#%^&*VADFA#n32add') // manually put to check in post req in postman
    // create(): string{
    //     return 'New Product Endpoint!!';
    // }

    // @Get() // Get decorator
    // // @Get('/all') // Get decorator -- /all explicitly route defined - now products route will not work /products/all will work
    // findAll(): string {  // these two lines are --> route handlers
    //     return 'Find All';
    // }

    // @Put()
    // update(): string{
    //     return 'Update endpoint!';
    // }

    // @Delete()
    // delete():string{
    //     return 'Delete Endpoint!!';
    // }

    //custom pattern request - shoudl be above GEt(':id') decorator , then only works otehriwse get id result will pop
    // @Get('ab*cd')
    // pattern(): string{
    //     return 'Pattern matched';
    // }

    //for redirection to aprticular url
    // @Get('docs') // when docs path will be clicked it will redirect to desired url --//products/docs
    // @Redirect('https://docs.nestjs.com/',302)
    // getDocs(@Query('version') version){
        
    //     if(version && version === '5'){  // docs?version=5 to go to version page url mentioned below
    //     return {url:'https://docs.nestjs.com/v5/'} ; 
    //     }
    // }
    

    // @Get(':id') // get decorator with dynamic id result fetch
    // findOne(): string{
    //     return 'Find one endpoint check!';
    // }

    //params decorator
    // @Get(':id')
    // findOne(@Param() params): string{
    //     return params; // will return id : 1 in json format if api path -> http://localhost:3000/products/1
    //     //added middleware to parse automaticlly , we dont ahve to do that
    // }

    @Get()
    async find(@Param() params): Promise<Product[]>{
        return this.productService.findAll();
    }

    // @Get(':id')
    // findOne(@Param() params): string{
    //     return params; // will return id : 1 in json format if api path -> http://localhost:3000/products/1
    //     //added middleware to parse automaticlly , we dont ahve to do that
    // }

    //finOne function created in service file
    @Get(':id')
    async findOne(@Param() params): Promise<Product>{
        return this.productService.findOne(params.id);
    }

    //Delete product
    @Delete(':id')
    async delete(@Param() params): Promise<Product[]>{
        return this.productService.delete(params.id);
    }


}
    // // using express type method
    // @Get()
    // findAll(
    //     @Req() // decorator - check nestjs official documentation
    //     request:Request,
    //     @Res() // decorator - check nestjs official documentation
    //     response: Response,
    // // ): string{
    // //     console.log(request);
    //     // return 'Find all!';
        
    //     // for response -- giving error -0-> Type 'Response<any, Record<string, any>>' is not assignable to type 'string'.
    //     // return response.json({msg:'find all!'}); // giving error as its string mentoioned

    //     @Query()  // decorator - check nestjs official documentation
    //     query,
    // ):any{ // type changed from string to any for returning response
    //     // console.log(request);
    //     console.log(query);
    //     return response.json({msg:'find all!'}); // output -->{      "msg": "find all!"        } in postman
    // }


// }
