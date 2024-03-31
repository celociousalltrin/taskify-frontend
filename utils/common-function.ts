import type { todoType } from "./common-types";

export const capitalizeString = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const deleteItem = (id: number, todos: todoType) => {
  return todos.response_data.filter((obj) => obj.id !== id);
};

export const updateItem = (id: number, todos: todoType, item: TList) => {
  return todos.response_data.map((o) => {
    if (o.id === id) {
      return item;
    } else {
      return o;
    }
  });
};

export const filterQueryUpdateFn = (
  value: any,
  key: string,
  queries: Record<string, any>
) => {
  if (queries[key] === value) {
    delete queries[key];
  } else {
    queries[key] = value;
  }
  return queries;
};
