import { type ComponentProps, useState } from "react";
import clsx from "clsx";
import styles from "./list.module.css";

import { ListItem } from "./list-item";

// TODO: a possibility would also be to decide wether the list is ordered or unordered

export type ListProps = ComponentProps<"ul"> & {
  title: string;
  description?: string;
  children: React.ReactElement<React.ComponentProps<typeof ListItem>>[];
  maxItemsBeforeCrop?: number;
  showAllNoCropButton?: boolean;
};

export const List = ({
  title,
  description,
  children,
  maxItemsBeforeCrop = 5,
  showAllNoCropButton,
  className,
}: ListProps) => {
  const numberItems = Array.isArray(children) ? children.length : 1;
  const [hasHiddenListItems, setHasHiddenListItems] = useState(
    !showAllNoCropButton && numberItems > maxItemsBeforeCrop,
  ); // This should be determined based on the actual number of list items and the initial view limit

  let classNameListContainer = clsx(styles.listContainer, className);

  // TODO: this should take an optional function provided by parent component, to fetch more items,
  // or to show all the items, etc. depending on the use case.
  // For now it just reveal all the items that were already there,
  // but in a real world scenario we might want to fetch more items from the server when clicking on "view all".
  function handleViewAllClick() {
    setHasHiddenListItems(false);
  }

  return (
    <div className={classNameListContainer}>
      <div className={styles.presentation}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
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
