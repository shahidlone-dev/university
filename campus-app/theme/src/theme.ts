/**
 * qaaf — assembled themes
 *
 * `lightTheme` and `darkTheme` are the objects components consume via
 * `useTheme()`. Each is the union of every primitive token plus the
 * mode-specific semantic colors and component themes.
 *
 * The shape is identical across modes — TypeScript guarantees this via
 * the shared `Theme` type — so any consumer can switch modes at runtime
 * without conditional logic.
 */

import { palette, gradients } from './tokens/palette';
import { lightColors, darkColors, type SemanticColors } from './tokens/colors';
import { textStyles, fontFamily, fontWeight } from './tokens/typography';
import { spacing, space } from './tokens/spacing';
import { radius } from './tokens/radius';
import { elevation } from './tokens/elevation';
import { duration, easing, spring } from './tokens/motion';
import { zIndex } from './tokens/zIndex';
import { iconSize } from './tokens/iconSize';
import { breakpoints } from './tokens/breakpoints';
import { buildComponents, type Components } from './components';

const buildTheme = (mode: 'light' | 'dark', colors: SemanticColors) => ({
  mode,

  // — Identity —
  palette,
  gradients,

  // — Mode-aware tokens —
  colors,
  components: buildComponents(colors) as Components,

  // — Mode-invariant tokens —
  textStyles,
  fontFamily,
  fontWeight,
  spacing,
  space,
  radius,
  elevation,
  duration,
  easing,
  spring,
  zIndex,
  iconSize,
  breakpoints,
});

export const lightTheme = buildTheme('light', lightColors);
export const darkTheme  = buildTheme('dark',  darkColors);

export type Theme = typeof lightTheme;
export type ThemeMode = 'light' | 'dark';
