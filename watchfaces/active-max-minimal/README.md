# Active Max Minimal Watchface

A minimal, clean watchface designed for **Amazfit Active Max**.

## Target Device

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

## Project Structure

```
active-max-minimal/
├── app.js              # App entry point
├── app.json            # App configuration
├── package.json        # Dependencies
├── watchface/
│   ├── index.js        # Main watchface logic
│   └── styles.js       # Constants and styles
└── assets/
    └── 480x480/        # Assets for Active Max
        ├── time/       # Time digit images
        ├── digits/     # Small digit images
        ├── aod/        # AOD digit images
        ├── week/       # Weekday images
        └── icons/      # Icon images
```

## Assets Required

You need to create the following image assets:

### Time Digits (time/)
- `0.png` to `9.png` - Large time digits (~80x100px)
- `colon.png` - Colon separator
- `colon_aod.png` - AOD colon (dimmer)

### Small Digits (digits/)
- `0.png` to `9.png` - Small digits (~20x30px)

### AOD Digits (aod/)
- `0.png` to `9.png` - AOD digits (dimmer colors)

### Week Days (week/)
- `sun.png`, `mon.png`, `tue.png`, `wed.png`, `thu.png`, `fri.png`, `sat.png`

### Icons (icons/)
- `heart.png` - Heart rate icon (~30x30px)

## License

MIT
