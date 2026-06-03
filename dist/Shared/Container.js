"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitContainer = exports.CategoryContainer = exports.PantryContainer = exports.ProductContainer = void 0;
const pantry_repository_1 = require("../Modules/Pantry/pantry.repository");
const pantry_service_1 = require("../Modules/Pantry/pantry.service");
const pantry_controller_1 = require("../Modules/Pantry/pantry.controller");
const product_repository_1 = require("../Modules/Product/product.repository");
const product_service_1 = require("../Modules/Product/product.service");
const product_controller_1 = require("../Modules/Product/product.controller");
const category_repository_1 = require("../Modules/Category/category.repository");
const category_service_1 = require("../Modules/Category/category.service");
const category_controller_1 = require("../Modules/Category/category.controller");
const unit_repository_1 = require("../Modules/Unit/unit.repository");
const unit_service_1 = require("../Modules/Unit/unit.service");
const unit_controller_1 = require("../Modules/Unit/unit.controller");
class ProductContainer {
    static _productRepository = new product_repository_1.ProductRepository();
    static _productService = new product_service_1.ProductService(this._productRepository);
    static _productController = new product_controller_1.ProductController(this._productService);
    static get ProductController() {
        return this._productController;
    }
}
exports.ProductContainer = ProductContainer;
class PantryContainer {
    static _pantryRepository = new pantry_repository_1.PantryRepository();
    static _pantryService = new pantry_service_1.PantryService(this._pantryRepository);
    static _pantryController = new pantry_controller_1.PantryController(this._pantryService);
    static get PantryController() {
        return this._pantryController;
    }
}
exports.PantryContainer = PantryContainer;
class CategoryContainer {
    static _categoryRepository = new category_repository_1.CategoryRepository();
    static _categoryService = new category_service_1.CategoryService(this._categoryRepository);
    static _categoryController = new category_controller_1.CategoryController(this._categoryService);
    static get CategoryController() {
        return this._categoryController;
    }
}
exports.CategoryContainer = CategoryContainer;
class UnitContainer {
    static _unitRepository = new unit_repository_1.UnitRepository();
    static _unitService = new unit_service_1.UnitService(this._unitRepository);
    static _unitController = new unit_controller_1.UnitController(this._unitService);
    static get UnitController() {
        return this._unitController;
    }
}
exports.UnitContainer = UnitContainer;
