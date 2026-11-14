import { isAxiosError } from 'axios';

function readErrorPayload(value: unknown): {
  message?: string;
  fieldErrors?: Record<string, string[]>;
} | null {
  if (typeof value !== 'object' || value === null) return null;
  const errorNode = (value as Record<string, unknown>).error;
  if (typeof errorNode !== 'object' || errorNode === null) return null;

  const errorRecord = errorNode as Record<string, unknown>;
  const message =
    typeof errorRecord.message === 'string' ? errorRecord.message : undefined;

  const rawFieldErrors = errorRecord.fieldErrors;
  const fieldErrors: Record<string, string[]> = {};
  if (typeof rawFieldErrors === 'object' && rawFieldErrors !== null) {
    for (const [key, val] of Object.entries(rawFieldErrors)) {
      if (Array.isArray(val)) {
        fieldErrors[key] = val.filter(
          (item): item is string => typeof item === 'string',
        );
      }
    }
  }

  return { message, fieldErrors };
}

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (isAxiosError(error)) {
    const payload = readErrorPayload(error.response?.data);
    if (payload?.message) return payload.message;
    const firstFieldError = payload?.fieldErrors
      ? Object.values(payload.fieldErrors)[0]?.[0]
      : undefined;
    if (firstFieldError) return firstFieldError;
    return fallback;
  }

  if (error instanceof Error && error.message) return error.message;
  return fallback;
}
