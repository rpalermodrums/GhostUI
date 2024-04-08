import { RefObject } from 'react';
import { useScrollspy } from './useScrollspy';
import type { ScrollspyProps } from './type';

export { useScrollspy };

export const Scrollspy = ({
  children,
  sectionRefs,
  rootSelector,
  offset,
}: ScrollspyProps) => {
  const {
    elementsStatusInViewport,
    currentElementIndexInViewport,
  } = useScrollspy({
    sectionRefs,
    rootSelector,
    offset,
  });

  return children({
    elementsStatusInViewport,
    currentElementIndexInViewport,
  });
};

