import type { ComponentProps } from "react";
import styles from "./list-item.module.css";
import DefaultIconUrl from "../../assets/icons/document-blank.svg";

// TODO: add props:
// - title - required
// description - optional
// start icon - optional
// end action - optional

// each list-item should support a disabled state

// style a hover state for each list-item

export type ListItemProps = ComponentProps<"li"> & {
  title: string;
  description?: string;
  startIcon?: React.ReactNode; // accepts any React component/element
  // endAction?: (fn())
  // disabled?: boolean;
};

export const ListItem = ({
  title,
  description,
  startIcon = <img src={DefaultIconUrl} alt='document' />,
}: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      {startIcon && <div className={styles.icon}>{startIcon}</div>}
      <div>
        <span className={styles.title}>{title}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
      {/* button */}
    </li>
  );
};
