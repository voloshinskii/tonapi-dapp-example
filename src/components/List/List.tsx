import { Children, memo, ReactNode } from "react";
import { ListItem } from "./ListItem.tsx";

export interface ListProps {
  children: ReactNode;
}

const ListComponent = memo<ListProps>((props) => {
  return (
    <div className="list">
      {Children.map(props.children, (child, idx) => (
        <>
          {child}
          {idx < Children.count(props.children) - 1 && <div className="divider" />}
        </>
      ))}
    </div>
  );
});

export const List = Object.assign(ListComponent, {
  Item: ListItem,
});
