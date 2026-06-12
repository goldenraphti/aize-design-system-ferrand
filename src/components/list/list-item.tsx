import type { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./list-item.module.css";
import { AddIcon, TagIcon } from "../../assets/icons";

const defaultStartIcon = <TagIcon />;
const defaultEndAction = () => alert("🐠end action🐒");

export type ListItemProps = ComponentProps<"li"> & {
  title: string;
  description?: string;
  startIcon?: React.ReactNode; // accepts any React component/element
  endAction?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const ListItem = ({
  title,
  description,
  startIcon = defaultStartIcon,
  endAction = defaultEndAction,
  disabled = false,
  className,
}: ListItemProps) => {
  let classNameListItem = clsx(styles.listItem, className);

  return (
    <li
      className={classNameListItem}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {startIcon}
      <div>
        <span className={styles.title}>{title}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
      <button
        className={styles.button}
        onClick={disabled ? undefined : endAction}
        disabled={disabled}
        aria-label={disabled ? `${title} (disabled)` : title}
      >
        <AddIcon />
      </button>
    </li>
  );
};
