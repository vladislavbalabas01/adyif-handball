export const getSafePageNumber = (
  pageParam: string | string[] | undefined | null,
  defaultPage = 1,
): number => {
  if (!pageParam) return defaultPage;

  const rawValue = Array.isArray(pageParam) ? pageParam[0] : pageParam;

  const parsed = parseInt(rawValue, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return defaultPage;
  }

  return parsed;
};
