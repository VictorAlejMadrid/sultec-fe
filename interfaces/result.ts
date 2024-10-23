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
  pagination: {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    hasNextPage: boolean;
  };
};
