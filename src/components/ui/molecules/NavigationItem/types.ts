export type NavigationItem = {
  id: string | number;
  displayName: string;
  hiddenName?: string;
  path: string;
};

export type NavigationItemProps = {
  navigationItem: NavigationItem;
  isActive: boolean;
};
