type NonNullable<T extends any> = Exclude<T, null | undefined>;
type NonNullableArray<T extends any> = Array<NonNullable<T>>;

function notEmpty<Values extends unknown>(
  values: Values[]
): values is NonNullableArray<Values>;
function notEmpty<Value extends unknown>(
  value: Value
): value is NonNullable<Value>;
function notEmpty<Value extends any>(
  values: Value | Value[]
) {
  if (!Array.isArray(values)) {
    const value = values;

    return value !== undefined && value !== null;
  }

  return values.every((value) => {
    return value !== undefined && value !== null;
  });
}

export default notEmpty;
