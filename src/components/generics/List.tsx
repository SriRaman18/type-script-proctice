import React, { ReactNode } from "react";

type Person = {
  first: string;
  last: string;
};

type ListProps<T extends Person> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends Person>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item.first} {item.last}
        </div>
      ))}
    </div>
  );
};

export default List;
