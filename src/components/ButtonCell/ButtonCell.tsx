import { memo } from "react";
import IconMinus from "/ic-minus-16.svg";
import IconPlus from "/ic-plus-16.svg";
import classNames from "classnames";

export interface ButtonCellProps {
  minItems?: number;
  maxItems?: number;
  onAdd?: () => void;
  onRemove?: () => void;
  value: number;
}

export const ButtonCell = memo<ButtonCellProps>((props) => {
  const isMinusDisabled = props.value <= (props.minItems || 0);
  const isPlusDisabled = props.maxItems ? props.value >= props.maxItems : false;
  const buttonMinusClassName = classNames("button", { disabled: isMinusDisabled });
  const buttonPlusClassName = classNames("button", { disabled: isPlusDisabled });

  return (
    <div className="ph16">
      <div className="button-cell">
        <button disabled={isMinusDisabled} onClick={props.onRemove} className={buttonMinusClassName}>
          <img src={IconMinus} alt="Remove item" />
        </button>
        <div className={"value"}>{props.value}</div>
        <button disabled={isPlusDisabled} onClick={props.onAdd} className={buttonPlusClassName}>
          <img src={IconPlus} alt="Add item" />
        </button>
      </div>
    </div>
  );
});
