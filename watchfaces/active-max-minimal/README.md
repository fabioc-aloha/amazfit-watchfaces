# Active Max Minimal Watchface

<p align="center">
  <img src="../../brand/logos/logo.svg" alt="CorreaX" width="48">
</p>

<p align="center">
  <strong>A minimal, elegant watchface by CorreaX</strong><br>
  <sub>Designed for Amazfit Active Max</sub>
</p>

---

## Target Devices

| Device | Resolution | AOD | API Level |
|--------|------------|-----|-----------|
| **Amazfit Active Max** | 480×480 | 324×324 | 4.2 / ZeppOS 5.0 |
| Amazfit Active 2 (Round) | 466×466 | 314×314 | 4.2 / ZeppOS 5.0 |

## Features

- ⏰ Large digital time display
- 📅 Day of week and date
- 🔋 Battery level with arc indicator
- 👟 Step counter with arc indicator
- ❤️ Heart rate display
- 🌙 AOD (Always-On Display) mode

## Color Palette

This watchface uses the **CorreaX Azure brand colors**:

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Azure Blue | `#0078d4` |
| Battery | Emerald | `#10b981` |
| Steps | Azure Blue | `#0078d4` |
| Heart | Red | `#ef4444` |
| Muted | Slate 500 | `#64748b` |

## Development

### Prerequisites

- Node.js 18+
- Zeus CLI: `npm install -g @zeppos/zeus-cli`
- Zepp Simulator

### Setup

```bash
cd watchfaces/active-max-minimal
npm install
```

### Run in Simulator

```bash
zeus dev
```

### Build for Device

```bash
zeus build
```

## Known Issues

### PNG2TGA Conversion Error (WIP)

The Zeus CLI build process may fail with an error like:

```
ENOENT: no such file or directory, lstat '...icon.png_origin'
```

**Status**: Under investigation. This appears to be related to the PNG2TGA conversion step in the Zeus CLI build pipeline. The PNG files are valid (confirmed via header inspection), but the build process expects an `_origin` intermediate file.

**Workarounds being explored**:
- Different build flags or configurations
- Alternative asset formats
- Direct simulator preview

## Project Structure

```text
active-max-minimal/
├── app.js              # App entry point
├── app.json            # App configuration
├── package.json        # Dependencies
├── watchface/
│   ├── index.js        # Main watchface logic
│   └── styles.js       # Constants and styles (CorreaX colors)
└── assets/
    └── 480x480/        # Assets for Active Max (flat structure)
        ├── time_0.png - time_9.png    # Time digits
        ├── aod_0.png - aod_9.png      # AOD digits (dimmer)
        ├── colon.png, colon_aod.png   # Separators
        ├── sun.png - sat.png          # Weekday images
        └── *_icon.png                 # Icons (battery, heart, steps)
```

## Assets

The watchface uses flat-named image assets in `assets/480x480/`:

### Time Digits

- `time_0.png` to `time_9.png` — Large time digits
- `colon.png` — Colon separator

### AOD Digits

- `aod_0.png` to `aod_9.png` — Dimmer digits for always-on display
- `colon_aod.png` — AOD colon separator

### Weekdays

- `sun.png`, `mon.png`, `tue.png`, `wed.png`, `thu.png`, `fri.png`, `sat.png`

### Icons

- `battery_icon.png`, `heart_icon.png`, `steps_icon.png`

---

## License

MIT

---

<p align="center">
  <sub>© 2026 CorreaX · Think. Build. Deploy.</sub>
</p>
