export type TTagType = {
  id: number;
  title: string;
  is_deleted: boolean;
  created_at: string;
};

export type TList = {
  title: string;
  id: number;
  is_completed: boolean;
  is_deleted: boolean;
  priority: string;
  created_at: string;
  tag: TTagType;
};

export type TListType = {
  data: TList;
  isTodoList: boolean;
};

export type todoType = {
  response_data: TList[];
};

export type storeType = {
  id: number;
  name: string;
};

export type TFilterDataType = {
  id: string;
  value: string;
};
