import type { useReadingProgress } from './useReadingProgress';

export type HookProps = {
  targetEl?: string;
  rootEl?: string;
};

export type ComponentProps = {
  children: (arg1: ReturnType<typeof useReadingProgress>) => JSX.Element;
} & HookProps;

export interface ReadingProgressProps {
  targetEl?: string;
  rootEl?: string;
  children: (progress: ReadingProgressState) => JSX.Element;
}

export interface ReadingProgressState {
  value: number;
}

