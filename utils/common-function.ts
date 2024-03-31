import type { todoType } from "./common-types";

export const capitalizeString = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const deleteItem = (id: number, todos: todoType) => {
  return todos.response_data.filter((obj) => obj.id !== id);
};

export const updateItem = (todos: todoType, item: TList) => {
  return todos.map((o) => {
    if (o.id === item.id) {
      return { ...o, ...item };
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

export const convertDate = (input: string) => {
  const date = new Date(input);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return formattedDate;
};
