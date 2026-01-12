<p align="center">
  <img src="brand/logos/banner.svg" alt="CorreaX" width="500">
</p>

<p align="center">
  <strong>Custom Watchfaces for Amazfit Active Line</strong><br>
  <sub>ZeppOS 4.2+ / 5.0 | Amazfit Active Max, Active 2</sub>
</p>

<p align="center">
  <a href="#watchfaces">Watchfaces</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#development">Development</a> •
  <a href="#resources">Resources</a>
</p>

---

## Overview

A collection of custom watchfaces for **Amazfit Active Max** and the Active device family, built with ZeppOS and following [CorreaX brand guidelines](brand/README.md).

### Target Devices

| Device | Resolution | AOD | API Level |
|--------|------------|-----|-----------|
| **Amazfit Active Max** | 480×480 | 324×324 | 4.2 / ZeppOS 5.0 |
| Amazfit Active 2 (Round) | 466×466 | 314×314 | 4.2 / ZeppOS 5.0 |
| Amazfit Active 2 (Square) | 390×450 | — | 4.2 / ZeppOS 5.0 |
| Amazfit Active | 390×450 | — | 3.0 / ZeppOS 3.0 |

---

## Watchfaces

### Active Max Minimal

<p align="center">
  <em>A clean, minimal watchface with Azure brand colors</em>
</p>

**Features:**
- ⏰ Large digital time display
- 📅 Day of week and date
- 🔋 Battery arc indicator
- 👟 Step counter arc
- ❤️ Heart rate display
- 🌙 AOD (Always-On Display) mode

**[View Details →](watchfaces/active-max-minimal/README.md)**

---

## Getting Started

### Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **Zeus CLI** — ZeppOS development tool
- **Zepp Simulator** — Test without a physical device

### Installation

```bash
# Clone the repository
git clone https://github.com/fabioc-aloha/amazfit-watchfaces.git
cd amazfit-watchfaces

# Install Zeus CLI globally
npm install -g @zeppos/zeus-cli

# Install watchface dependencies
cd watchfaces/active-max-minimal
npm install
```

### Run in Simulator

1. Download and install [Zepp Simulator](https://docs.zepp.com/docs/simulator/download/)
2. Launch the simulator and select **Amazfit Active Max** (480×480)
3. Run the development server:

```bash
cd watchfaces/active-max-minimal
zeus dev
```

See [SIMULATOR-SETUP.md](SIMULATOR-SETUP.md) for detailed instructions.

---

## Development

### Project Structure

```text
amazfit-watchfaces/
├── brand/                      # CorreaX brand assets
│   ├── logos/                  # Logo and banner SVGs
│   └── icons/                  # App icons
├── watchfaces/
│   └── active-max-minimal/     # First watchface
│       ├── app.json            # App configuration
│       ├── watchface/          # Watchface code
│       │   ├── index.js        # Main logic
│       │   └── styles.js       # Colors & constants
│       └── assets/480x480/     # Images for Active Max
├── reference-watchfaces/       # Cloned reference repo (git-ignored)
├── PROJECT-PLAN.md             # Development roadmap
├── SIMULATOR-SETUP.md          # Simulator guide
└── README.md                   # This file
```

### Commands

| Command | Description |
|---------|-------------|
| `zeus dev` | Start dev server with hot-reload |
| `zeus build` | Build `.zpk` package |
| `zeus preview` | Generate watchface preview image |

### Color Palette

All watchfaces use the **CorreaX Azure brand colors**:

| Color | Hex | Usage |
|-------|-----|-------|
| Azure Blue | `#0078d4` | Primary accent, steps |
| Azure Dark | `#005a9e` | Hover states |
| Emerald | `#10b981` | Battery, success |
| Red | `#ef4444` | Heart rate, alerts |
| Slate 500 | `#64748b` | Secondary/muted |

---

## Resources

### Official Documentation

- [ZeppOS Docs](https://docs.zepp.com/docs/intro/) — Official developer guide
- [Watchface API](https://docs.zepp.com/docs/watchface/api/hmUI/createWidget/) — Widget reference
- [Zeus CLI](https://docs.zepp.com/docs/guides/tools/cli/) — Command-line tool
- [Simulator](https://docs.zepp.com/docs/guides/tools/simulator/) — Testing guide

### Community

- [Zepp Discord](https://t.zepp.com/t/b6e70) — Official developer community
- [r/amazfit](https://www.reddit.com/r/amazfit/) — Reddit community
- [novvember/amazfit-watchfaces](https://github.com/novvember/amazfit-watchfaces) — 45+ reference watchfaces

---

## License

MIT

---

<p align="center">
  <img src="brand/logos/logo.svg" alt="CorreaX" width="24">
  <br>
  <sub>© 2026 CorreaX · Think. Build. Deploy.</sub>
</p>
