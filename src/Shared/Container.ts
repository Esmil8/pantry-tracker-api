import { PantryRepository } from '../Modules/Pantry/pantry.repository';
import { PantryService } from '../Modules/Pantry/pantry.service';
import { PantryController } from '../Modules/Pantry/pantry.controller';

import { ProductRepository } from '../Modules/Product/product.repository';
import { ProductService } from '../Modules/Product/product.service';
import { ProductController } from '../Modules/Product/product.controller';

export class ProductContainer {

    private static _productRepository = new ProductRepository();
    private static _productService = new ProductService(this._productRepository);
    private static _productController = new ProductController(this._productService)

    static get ProductController() {
        return this._productController;
    }
}

export class PantryContainer {
    private static _pantryRepository = new PantryRepository();
    private static _pantryService = new PantryService(this._pantryRepository);
    private static _pantryController = new PantryController(this._pantryService);

    static get PantryController() {
        return this._pantryController;
    }
}
