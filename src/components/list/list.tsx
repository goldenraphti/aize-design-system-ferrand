import { type ComponentProps, type PropsWithChildren, useState } from "react";
import clsx from "clsx";
import styles from "./list.module.css";

import { ListItem } from "./list-item";

// list is interactive, at its bottom there is a "View all documents" and clicking it would expand to the whole list
// which means there is an initial "cropped view" with only 5 items.
// this could be a props for the list, the amount of initial list-items viewed before expanding
// this means if the list does not have nmore than what's seen then do not display the "expand" button
// add a prop to customize the "expend button" text

// also as props the title and description of the list
// a possibility would also be to decide wether the list is ordered or unordered

export type ListProps = ComponentProps<"ul"> & {
  title: string;
  description?: string;
  children: React.ReactElement<React.ComponentProps<typeof ListItem>>[];
  maxItemsBeforeCrop?: number;
  showAllNoCropButton?: boolean;
};

export const List = ({
  children,
  maxItemsBeforeCrop = 5,
  showAllNoCropButton,
  className,
  ...props
}: ListProps) => {
  const numberItems = Array.isArray(children) ? children.length : 1;
  const [hasHiddenListItems, setHasHiddenListItems] = useState(
    !showAllNoCropButton && numberItems > maxItemsBeforeCrop,
  ); // This should be determined based on the actual number of list items and the initial view limit

  let classNameListContainer = clsx(styles.listContainer, className);

  function handleViewAllClick() {
    setHasHiddenListItems(false);
  }

  return (
    <div className={classNameListContainer}>
      <div className={styles.presentation}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.description && (
          <p className={styles.description}>{props.description}</p>
        )}
      </div>
      <ul className={styles.list}>
        {[...children].map((itemChild, i) => {
          if (i < maxItemsBeforeCrop || !hasHiddenListItems) {
            return itemChild;
          }
        })}
      </ul>
      {hasHiddenListItems && (
        <button className={styles.viewAllButton} onClick={handleViewAllClick}>
          View all documents
        </button>
      )}
    </div>
  );
};
