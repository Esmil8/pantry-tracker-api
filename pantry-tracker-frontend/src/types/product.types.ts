// Product types
import type { Category } from './category.types';
import type { Unit } from './unit.types';

export interface Product {
  Id: number;
  Name: string;
  Description: string;
  Brand: string;
  BarCode: string;
  CategoryId: number;
  UnitId: number;
  Category?: Category;
  Unit?: Unit;
  CreatedDate: string;
  UpdatedDate: string;
}

export interface CreateProductRequest {
  Name: string;
  Description: string;
  Brand: string;
  BarCode: string;
  CategoryId: number;
  UnitId: number;
}

export interface UpdateProductRequest {
  Name?: string;
  Description?: string;
  Brand?: string;
  BarCode?: string;
  CategoryId?: number;
  UnitId?: number;
}

export interface ProductListResponse {
  Data: Product[];
  Message: string;
}

export interface ProductResponse {
  Data: Product;
  Message: string;
}

export interface ProductQuery {
  name?: string;
  description?: string;
  brand?: string;
  barcode?: string;
  categoryId?: number;
  unitId?: number;
  page?: number;
  limit?: number;
}
