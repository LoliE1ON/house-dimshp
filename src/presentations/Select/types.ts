export type SelectProps = {
  placeholder: string;
  list: SelectList[];
  onSelect: (value: string) => void;
};

export type SelectList = {
  name: string;
  value: string;
};
