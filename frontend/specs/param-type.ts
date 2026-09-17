import type { OperationType } from "@/lib/financial-types"

/** ISO calendar date used by the API query parameters (YYYY-MM-DD). */
export type ApiDateString = string

/** Optional inclusive date range shared by the API queries. */
export interface DateRangeFilter {
  start_date?: ApiDateString
  end_date?: ApiDateString
}

/** Query parameters for GET /api/metrics/alerts. */
export interface AlertsParams extends DateRangeFilter {
  threshold?: number
}

/** Query parameters for GET /api/metrics/categories/top. */
export interface TopCategoriesParams extends DateRangeFilter {
  operation_type?: OperationType
  limit?: number
}
