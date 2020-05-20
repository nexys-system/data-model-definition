export interface Projection {
  [attr:string]: boolean | Projection
}

interface FiltersIn {
  $in: (number | string | boolean | Date)[]
}

interface FiltersNe {
  $ne: (null | number | string | boolean | Date)
}

export interface Filters {
  [attr:string]: string | boolean | number | Date | FiltersIn | FiltersNe | Filters
}

// todo: doublecheck, currently same structure as Query
export interface References {
  [entity:string]: Params
}

export interface Params {
  filters?: Filters,
  projection?: Projection,
  references?: References,
  order?: {by: string, desc?: boolean},
  take?: number,
  skip?: number
}

export interface Query {
  [entity:string]: Params
}

export interface QueryResponse {
  [entity:string]: any[]
}

export interface Mutate {
  [entity:string]: {
    insert?:{
      data:any | any[]
    },
    update?:{
      filters?: Filters,
      data:any
    },
    delete?:{
      filters: Filters
    }
  }
}


export interface MutateResponseInsert {
  success: boolean,
  uuid?:string,
  id?:number,
  status?: string
}

export interface MutateResponse {
  [entity:string]: {
    insert?: MutateResponseInsert | MutateResponseInsert[]
  }
}

export interface withPosition {
  [key:string]:any,
  position: number
}

export interface Row {
  [key:string]:any
}

export interface InsertMultipleOut {
  bound?:{min:number, max: number},
  length: number
}