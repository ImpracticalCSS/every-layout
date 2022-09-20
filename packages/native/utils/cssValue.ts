function cssValue(
    value: number | string | undefined,
    suffix: string,
    defaultValue: string | number
  ): number | string;
function cssValue(
  value: number | string | undefined,
  suffix?: string,
  defaultValue?: undefined
): number | string | undefined;
function cssValue<DefaultValue extends string | number | undefined = undefined>(
  value: number | string | undefined,
  suffix: string = "rem",
  defaultValue?: DefaultValue
) {
  if (typeof value === "number") return `${value}${suffix}`;
  if (typeof value === "string") return value;
  return defaultValue;
}

export default cssValue;
