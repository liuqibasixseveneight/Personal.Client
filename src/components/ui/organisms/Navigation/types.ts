export type NavigationItem = {
  id: string | number;
  displayName: string;
  hiddenName?: string;
  path: string;
};

export type NavigationProps = {
  navigationItems: NavigationItem[];
};
