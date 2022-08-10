import { type ThemeOverride } from '@app/theme';

declare global {
  namespace ReactNativePaper {
    interface Theme extends ThemeOverride {}
  }
}
