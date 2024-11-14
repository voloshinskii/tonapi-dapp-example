import { memo, ReactNode } from "react";

export interface ListItemProps {
  title: string;
  children?: ReactNode;
}

export const ListItem = memo<ListItemProps>((props) => {
  return (
    <div className="item">
      <div className="body1 secondary">
        {props.title}
      </div>
      {props.children}
    </div>
  );
});
