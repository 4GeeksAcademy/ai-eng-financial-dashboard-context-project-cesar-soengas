import type { OperationType } from "@/lib/financial-types"

type DateDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

/** ISO calendar date used by the API query parameters (YYYY-MM-DD). */
export type ApiDateString = `${DateDigit}${DateDigit}${DateDigit}${DateDigit}-${DateDigit}${DateDigit}-${DateDigit}${DateDigit}`

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
