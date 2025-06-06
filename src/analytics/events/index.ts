export interface BaseEventParameters {
  page_location: string;
}

export interface PageViewEventParameters extends BaseEventParameters {
  page_title: string;
}

export interface ButtonClickEventParameters extends BaseEventParameters {
  button_name: string;
}

export type EventParameters = PageViewEventParameters | ButtonClickEventParameters

export enum Events {
  PAGE_VIEW = "page_view",
  BUTTON_CLICK = "button_click",
}
