// Pantry types
export type PantryItemStatus =
  | 'EXPIRED'
  | 'EXPIRING_TODAY'
  | 'CRITICAL_EXPIRING_IN_1_DAYS'
  | 'CRITICAL_EXPIRING_IN_2_DAYS'
  | 'CRITICAL_EXPIRING_IN_3_DAYS'
  | 'EXPIRING_IN_4_DAYS'
  | 'EXPIRING_IN_5_DAYS'
  | 'EXPIRING_IN_6_DAYS'
  | 'EXPIRING_IN_7_DAYS'
  | 'FRESH'
  | 'NO_EXPIRATION';

export type PantryStatusFilter = 'EXPIRED' | 'EXPIRING_TODAY' | 'CRITICAL' | 'EXPIRING_IN_7_DAYS' | 'FRESH';

export interface Pantry {
  Id: number;
  Name: string;
  UserId: number;
  CreatedDate: string;
  UpdatedDate: string;
}

export interface PantryItem {
  Id: number;
  PantryId: number;
  ProductId: number;
  Quantity: number;
  ExpirationDate: string | null;
  Location: string | null;
  Notes: string | null;
  CreatedDate: string;
  UpdatedDate: string;
  status: PantryItemStatus;
  Product: {
    Name: string;
    Brand: string;
    BarCode: string;
  };
}

export interface CreatePantryRequest {
  Name: string;
}

export interface AddPantryItemRequest {
  ProductId: number;
  Quantity: number;
  ExpirationDate?: string;
  Location?: string | null;
  Notes?: string | null;
}

export interface UpdatePantryItemRequest {
  ProductId?: number;
  Quantity?: number;
  ExpirationDate?: string;
  Location?: string | null;
  Notes?: string | null;
}

export interface PantryListResponse {
  Status: string;
  Data: {
    message: string;
    pantries: Pantry[];
  };
  Message: string;
}

export interface PantryItemsResponse {
  Status: string;
  Data: PantryItem[];
  Message: string;
}

export interface PantryItemsQuery {
  status?: PantryStatusFilter;
  ProductName?: string;
  page?: number;
  limit?: number;
}
