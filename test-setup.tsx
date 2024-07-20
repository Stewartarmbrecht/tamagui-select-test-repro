/* eslint-disable @typescript-eslint/no-namespace */
import '@testing-library/jest-native/extend-expect';
import React from 'react';

process.env.LOGGING = 'false';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePathname(expected: string): R;
      toHavePathnameWithParams(expected: string): R;
      toHaveSegments(expected: string[]): R;
      toHaveSearchParams(expected: URLSearchParams): R;
    }
  }
}
