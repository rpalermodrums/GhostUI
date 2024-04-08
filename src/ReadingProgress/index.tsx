import type { ReadingProgressProps } from './type';
import { useReadingProgress } from './useReadingProgress';

export { useReadingProgress };

export const ReadingProgress = ({
  targetEl,
  rootEl,
  children,
}: ReadingProgressProps) => {
  const progress = useReadingProgress({ targetEl, rootEl });

  return children(progress);
};

