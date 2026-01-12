/**
 * Styles and constants for Active Max Minimal watchface
 * Target: Amazfit Active Max (480x480 round)
 * 
 * Brand: CorreaX
 * Color Palette: Azure Tones (see brand/README.md)
 */

// Screen dimensions for Active Max
export const SCREEN = {
  width: 480,
  height: 480,
  centerX: 240,
  centerY: 240,
  // AOD dimensions
  aodWidth: 324,
  aodHeight: 324,
};

// Color palette - CorreaX Brand Colors (Azure Tones)
export const COLORS = {
  background: 0x000000,    // Black (watchface background)
  primary: 0xFFFFFF,       // White (primary text/elements)
  accent: 0x0078D4,        // Azure Blue (CorreaX primary brand)
  accentDark: 0x005A9E,    // Azure Dark (hover/emphasis)
  accentLight: 0x00BCF2,   // Azure Light (highlights)
  battery: 0x10B981,       // Emerald (success - CorreaX brand)
  steps: 0x0078D4,         // Azure Blue (matches brand)
  heart: 0xEF4444,         // Red (CorreaX error/health)
  secondary: 0x64748B,     // Slate 500 (muted - CorreaX brand)
};

// Time digit images (main display)
export const TIME_DIGITS = [
  'time_0.png',
  'time_1.png',
  'time_2.png',
  'time_3.png',
  'time_4.png',
  'time_5.png',
  'time_6.png',
  'time_7.png',
  'time_8.png',
  'time_9.png',
];

// Small digit images (seconds, date, metrics) - reusing time digits
export const SMALL_DIGITS = [
  'time_0.png',
  'time_1.png',
  'time_2.png',
  'time_3.png',
  'time_4.png',
  'time_5.png',
  'time_6.png',
  'time_7.png',
  'time_8.png',
  'time_9.png',
];

// AOD digit images (dimmer for battery saving)
export const AOD_DIGITS = [
  'aod_0.png',
  'aod_1.png',
  'aod_2.png',
  'aod_3.png',
  'aod_4.png',
  'aod_5.png',
  'aod_6.png',
  'aod_7.png',
  'aod_8.png',
  'aod_9.png',
];

// Weekday images
export const WEEKDAY_IMAGES = [
  'sun.png',
  'mon.png',
  'tue.png',
  'wed.png',
  'thu.png',
  'fri.png',
  'sat.png',
];

// Combined export
export const STYLES = {
  SCREEN,
  COLORS,
  TIME_DIGITS,
  SMALL_DIGITS,
  AOD_DIGITS,
  WEEKDAY_IMAGES,
};
