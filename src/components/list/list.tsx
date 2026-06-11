import type { ComponentProps, PropsWithChildren } from "react";
// import clsx from "clsx";
import styles from "./list.module.css";

import { ListItem } from "./list-item";

// list is interactive, at its bottom there is a "View all documents" and clicking it would expand to the whole list
// which means there is an initial "cropped view" with only 5 items.
// this could be a props for the list, the amount of initial list-items viewed before expanding
// this means if the list does not have nmore than what's seen then do not display the "expand" button
// add a prop to customize the "expend button" text

// also as props the title and description of the list
// a possibility would also be to decide wether the list is ordered or unordered

export const List = ({}) => {
  return (
    <ul className={styles.list}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </ul>
  );
};
