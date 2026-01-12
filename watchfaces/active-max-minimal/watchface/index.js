/**
 * Active Max Minimal Watchface
 * Main watchface entry point
 * 
 * Brand: CorreaX
 * Target Device: Amazfit Active Max
 * Resolution: 480x480 (round)
 * AOD Resolution: 324x324
 */

import { STYLES } from './styles';

WatchFace({
  onInit() {
    console.log('Watchface onInit');
  },

  build() {
    console.log('Watchface build');
    
    this.buildBackground();
    this.buildTime();
    this.buildDate();
    this.buildBattery();
    this.buildSteps();
    this.buildHeartRate();
    this.buildAOD();
  },

  onDestroy() {
    console.log('Watchface onDestroy');
  },

  /**
   * Build the background layer
   */
  buildBackground() {
    // Main background (normal mode)
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: STYLES.SCREEN.width,
      h: STYLES.SCREEN.height,
      color: STYLES.COLORS.background,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build the time display (digital)
   */
  buildTime() {
    // Hours
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_startX: STYLES.SCREEN.centerX - 120,
      hour_startY: STYLES.SCREEN.centerY - 60,
      hour_zero: 1,
      hour_space: 2,
      hour_align: hmUI.align.CENTER_H,
      hour_array: STYLES.TIME_DIGITS,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Colon separator
    hmUI.createWidget(hmUI.widget.IMG, {
      x: STYLES.SCREEN.centerX - 10,
      y: STYLES.SCREEN.centerY - 50,
      src: 'time/colon.png',
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Minutes
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      minute_startX: STYLES.SCREEN.centerX + 20,
      minute_startY: STYLES.SCREEN.centerY - 60,
      minute_zero: 1,
      minute_space: 2,
      minute_align: hmUI.align.CENTER_H,
      minute_array: STYLES.TIME_DIGITS,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Seconds (smaller, below main time)
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      second_startX: STYLES.SCREEN.centerX - 25,
      second_startY: STYLES.SCREEN.centerY + 40,
      second_zero: 1,
      second_space: 1,
      second_align: hmUI.align.CENTER_H,
      second_array: STYLES.SMALL_DIGITS,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build the date display
   */
  buildDate() {
    // Day of week
    hmUI.createWidget(hmUI.widget.IMG_WEEK, {
      x: STYLES.SCREEN.centerX - 40,
      y: 80,
      week_en: STYLES.WEEKDAY_IMAGES,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Date (day/month)
    hmUI.createWidget(hmUI.widget.IMG_DATE, {
      day_startX: STYLES.SCREEN.centerX - 30,
      day_startY: 120,
      day_zero: 1,
      day_space: 2,
      day_align: hmUI.align.CENTER_H,
      day_en_array: STYLES.SMALL_DIGITS,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build battery indicator
   */
  buildBattery() {
    // Battery arc
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      x: STYLES.SCREEN.centerX - 200,
      y: STYLES.SCREEN.centerY - 200,
      w: 400,
      h: 400,
      start_angle: 135,
      end_angle: 180,
      color: STYLES.COLORS.battery,
      line_width: 8,
      level: 100,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Battery percentage text
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 50,
      y: STYLES.SCREEN.centerY + 80,
      type: hmUI.data_type.BATTERY,
      font_array: STYLES.SMALL_DIGITS,
      align_h: hmUI.align.LEFT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build steps counter
   */
  buildSteps() {
    // Steps arc
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      x: STYLES.SCREEN.centerX - 200,
      y: STYLES.SCREEN.centerY - 200,
      w: 400,
      h: 400,
      start_angle: 0,
      end_angle: 45,
      color: STYLES.COLORS.steps,
      line_width: 8,
      level: 100,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Steps count
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: STYLES.SCREEN.width - 120,
      y: STYLES.SCREEN.centerY + 80,
      type: hmUI.data_type.STEP,
      font_array: STYLES.SMALL_DIGITS,
      align_h: hmUI.align.RIGHT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build heart rate display
   */
  buildHeartRate() {
    // Heart icon
    hmUI.createWidget(hmUI.widget.IMG, {
      x: STYLES.SCREEN.centerX - 15,
      y: STYLES.SCREEN.height - 100,
      src: 'icons/heart.png',
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // Heart rate value
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: STYLES.SCREEN.centerX - 40,
      y: STYLES.SCREEN.height - 60,
      type: hmUI.data_type.HEART,
      font_array: STYLES.SMALL_DIGITS,
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  },

  /**
   * Build Always-On Display mode
   */
  buildAOD() {
    // AOD Background (darker)
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: STYLES.SCREEN.width,
      h: STYLES.SCREEN.height,
      color: 0x000000,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    // AOD Time - Hours
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_startX: STYLES.SCREEN.centerX - 100,
      hour_startY: STYLES.SCREEN.centerY - 40,
      hour_zero: 1,
      hour_space: 2,
      hour_align: hmUI.align.CENTER_H,
      hour_array: STYLES.AOD_DIGITS,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    // AOD Colon
    hmUI.createWidget(hmUI.widget.IMG, {
      x: STYLES.SCREEN.centerX - 8,
      y: STYLES.SCREEN.centerY - 30,
      src: 'time/colon_aod.png',
      show_level: hmUI.show_level.ONAL_AOD,
    });

    // AOD Time - Minutes
    hmUI.createWidget(hmUI.widget.IMG_TIME, {
      minute_startX: STYLES.SCREEN.centerX + 20,
      minute_startY: STYLES.SCREEN.centerY - 40,
      minute_zero: 1,
      minute_space: 2,
      minute_align: hmUI.align.CENTER_H,
      minute_array: STYLES.AOD_DIGITS,
      show_level: hmUI.show_level.ONAL_AOD,
    });
  },
});
