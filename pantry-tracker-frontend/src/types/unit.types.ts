// Unit types
export interface Unit {
  Id: number;
  Name: string;
  Abbreviation: string;
  CreatedDate: string;
  UpdatedDate: string;
}

export interface CreateUnitRequest {
  Name: string;
  Abbreviation: string;
}

export interface UnitListResponse {
  Data: Unit[];
  Message: string;
}

export interface UnitResponse {
  Data: Unit;
  Message: string;
}
