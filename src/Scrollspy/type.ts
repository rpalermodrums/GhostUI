export abstract class Root {
  abstract get outerHeight(): number;
  abstract get scrollTop(): number;
  abstract get scrollHeight(): number;
  abstract isScrolledToBottom(): boolean;
  abstract registerScrollEvent(callback: () => void): void;
  abstract unregisterScrollEvent(callback: () => void): void;
}

export interface ScrollspyProps {
  sectionRefs: RefObject<Element>[];
  rootSelector?: string;
  offset?: number;
  children: ({
    elementsStatusInViewport,
    currentElementIndexInViewport,
  }: ScrollspyResult) => JSX.Element;
}

export interface ScrollspyResult {
  elementsStatusInViewport: boolean[];
  currentElementIndexInViewport: number;
}

