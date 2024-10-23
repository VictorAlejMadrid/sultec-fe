export type Result<T> = {
  success: boolean;
  data: T;
  code: number;
  errors: string[];
};

export type PaginatedResult<T> = {
  success: boolean;
  data: T[];
  code: number;
  errors: string[];
  pagination: Pagination;
};

export type Pagination = {
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
};
