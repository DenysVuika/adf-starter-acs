export type UiAction = [string] | [string, unknown[]];

export type AppSidebarEntry = {
  text: string;
  icon?: string;
  action: UiAction;
};

export type AppToolbarEntry = {
  text: string;
  icon?: string;
  action: UiAction;
};
