/**
 * Styles and constants for Active Max Minimal watchface
 * Target: Amazfit Active Max (480x480 round)
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

// Color palette
export const COLORS = {
  background: 0x000000,    // Black
  primary: 0xFFFFFF,       // White
  accent: 0x00D4AA,        // Teal/Cyan accent
  battery: 0x4CAF50,       // Green
  steps: 0x2196F3,         // Blue
  heart: 0xE91E63,         // Pink/Red
  secondary: 0x888888,     // Gray
};

// Time digit images (main display)
export const TIME_DIGITS = [
  'time/0.png',
  'time/1.png',
  'time/2.png',
  'time/3.png',
  'time/4.png',
  'time/5.png',
  'time/6.png',
  'time/7.png',
  'time/8.png',
  'time/9.png',
];

// Small digit images (seconds, date, metrics)
export const SMALL_DIGITS = [
  'digits/0.png',
  'digits/1.png',
  'digits/2.png',
  'digits/3.png',
  'digits/4.png',
  'digits/5.png',
  'digits/6.png',
  'digits/7.png',
  'digits/8.png',
  'digits/9.png',
];

// AOD digit images (dimmer for battery saving)
export const AOD_DIGITS = [
  'aod/0.png',
  'aod/1.png',
  'aod/2.png',
  'aod/3.png',
  'aod/4.png',
  'aod/5.png',
  'aod/6.png',
  'aod/7.png',
  'aod/8.png',
  'aod/9.png',
];

// Weekday images
export const WEEKDAY_IMAGES = [
  'week/sun.png',
  'week/mon.png',
  'week/tue.png',
  'week/wed.png',
  'week/thu.png',
  'week/fri.png',
  'week/sat.png',
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
