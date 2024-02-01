/// <reference types="vite/client" />

type LabelType = "day" | "month" | "year";

interface Age {
  years: number;
  months: number;
  days: number;
}

interface ErrorType {
  day?: string;
  month?: string;
  year?: string;
}
