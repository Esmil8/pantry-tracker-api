// Category types
export interface Category {
  Id: number;
  Name: string;
  Description: string;
  CreatedDate: string;
  UpdatedDate: string;
}

export interface CreateCategoryRequest {
  Name: string;
  Description: string;
}

export interface UpdateCategoryRequest {
  Name?: string;
  Description?: string;
}

export interface CategoryListResponse {
  Data: Category[];
  Message: string;
}

export interface CategoryResponse {
  Data: Category;
  Message: string;
}
