// create service through cli => nest g service products  

import { Injectable } from '@nestjs/common';
import { Product } from './inerfaces/product.interface';

@Injectable() //decorator - injest it as a dependency
export class ProductsService {
    // products = [];

    //after interface creation
    products: Product[] = [];

    //db logic
    create(product : Product){
        // return this.products;  // return the array pf products
        // return product; // will show the prodiuct created in controller constructor function

        //adding in the array
        // this.products.push(product);  // will add the same controller constructor project again and again in the output
        this.products.push(product);// will create post req of the product detail in  the body in json format and show that fields as a result in output
        return this.products;
    } 
    //get all products created at once
    findAll(): Product[] {  // these two lines are --> route handlers
            return this.products;
    }

    //find one product
    findOne(id: string): Product{
        return this.products.find(p => p.id === id);
    }

    //delete product by id
    delete(id: string): Product[]{
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index,1);
        return this.products;
    }
}
