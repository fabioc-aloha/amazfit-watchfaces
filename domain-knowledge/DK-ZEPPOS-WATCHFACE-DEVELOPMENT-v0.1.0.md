# Domain Knowledge: ZeppOS Watchface Development

**Version**: 0.1.0 NILUNNIL  
**Domain**: Embedded UI / Wearable Development  
**Acquisition Date**: 2026-01-12  
**Status**: Active Learning - Build Pipeline Issue Unresolved

---

## Core Concepts

### ZeppOS Architecture
- **API Levels**: ZeppOS uses API levels (e.g., 4.2 for ZeppOS 5.0)
- **Device Sources**: Numeric identifiers for specific hardware (e.g., 10813697 for Active Max)
- **Resolution Targeting**: Assets organized by resolution folders (e.g., `assets/480x480/`)

### Project Structure
```
watchface-project/
├── app.js              # Entry point with onCreate/onDestroy lifecycle
├── app.json            # Critical configuration (targets, modules, metadata)
├── package.json        # Node dependencies
├── icon.png            # Root-level app icon (REQUIRED)
├── cover.png           # Root-level cover image (REQUIRED)
├── watchface/
│   └── index.js        # Main watchface with build() and onDestroy()
└── assets/
    └── {resolution}/   # Resolution-specific assets (flat structure preferred)
```

### app.json Critical Fields
```json
{
  "appId": 1000001,           // Must be non-zero for builds
  "icon": "icon.png",         // Root-level reference
  "cover": ["cover.png"],     // Array format
  "targets": {
    "target-name": {
      "module": { "watchface": { "path": "watchface" } },
      "platforms": [{ "deviceSource": 10813697 }],
      "designWidth": 480
    }
  }
}
```

### ZeppOS Widget System
- `hmUI.createWidget()` - Core widget creation
- Widget types: `IMG`, `IMG_TIME`, `IMG_DATE`, `IMG_WEEK`, `TEXT_IMG`, `ARC_PROGRESS`
- Coordinate system: Origin at top-left, y increases downward

---

## Tool Chain

### Zeus CLI
- **Install**: `npm install -g @zeppos/zeus-cli`
- **Commands**:
  - `zeus create` - Scaffold new project
  - `zeus build` - Production build (creates .zab file)
  - `zeus dev -t <target>` - Development with simulator
  - `zeus preview` - Preview on device

### Zepp Simulator
- Location: `%LOCALAPPDATA%\Programs\simulator\simulator.exe`
- Requires separate installation from Zepp website
- Connects via `--simulator-host` flag

---

## Known Issues & Patterns

### PNG2TGA Conversion Error (UNRESOLVED)
**Error**: `ENOENT: no such file or directory, lstat '...icon.png_origin'`

**Context**: Zeus build pipeline converts PNG to TGA format. The `_origin` suffix suggests intermediate file handling during image transformation.

**Observations**:
- PNG files validated as correct format (magic bytes: 137 80 78 71 13 10 26 10)
- Error occurs in temp directory during build
- Files exist and are valid, but pipeline expects `_origin` variants

**Hypotheses**:
1. Race condition in async file operations
2. Missing build step that creates `_origin` backups
3. Version-specific Zeus CLI bug
4. ZeppOS 4.x API level specific requirement

**Investigation Paths**:
- [ ] Check Zeus CLI GitHub issues
- [ ] Try older Zeus CLI version
- [ ] Pre-convert PNG to TGA manually
- [ ] Examine PNG2TGA module source

### Asset Naming Conventions
- **Flat structure preferred**: `time_0.png` not `time/0.png`
- **AOD variants**: Separate dimmer images for always-on display
- **Required root files**: `icon.png`, `cover.png` at project root

---

## Device Reference

| Device | Resolution | AOD | Device Source | API |
|--------|------------|-----|---------------|-----|
| Amazfit Active Max | 480×480 | 324×324 | 10813697, 10813699 | 4.2 |
| Amazfit Active 2 (Round) | 466×466 | 314×314 | TBD | 4.2 |

---

## Synapses

### High-Strength Input Connections
- [DK-VISUAL-ARCHITECTURE-DESIGN](DK-VISUAL-ARCHITECTURE-DESIGN-v0.9.9.md) (High, Informs, Bidirectional) - "UI layout and visual design principles"
- [DK-DOCUMENTATION-EXCELLENCE](DK-DOCUMENTATION-EXCELLENCE-v1.1.0.md) (Medium, Guides, Forward) - "Technical documentation patterns"

### Medium-Strength Output Connections  
- [bootstrap-learning.instructions.md](../.github/instructions/bootstrap-learning.instructions.md) (High, Implements, Forward) - "Domain acquisition through debugging"
- [empirical-validation.instructions.md](../.github/instructions/empirical-validation.instructions.md) (Medium, Validates, Forward) - "Build failure hypothesis testing"

### Contextual Activation Connections
- [alex-core.instructions.md](../.github/instructions/alex-core.instructions.md) (Medium, Enables, Forward) - "Problem decomposition and systematic debugging"

**Primary Function**: Capture ZeppOS watchface development patterns, tooling knowledge, and debugging strategies for Amazfit wearable projects.

**Activation Triggers**:
- Watchface or wearable UI development requests
- Zeus CLI or ZeppOS troubleshooting
- Amazfit device targeting questions
- Build pipeline debugging scenarios

---

## Session Log

### 2026-01-12: Initial Domain Acquisition
- **Context**: Building "Active Max Minimal" watchface for Amazfit Active Max
- **Accomplishments**:
  - Complete watchface code structure established
  - 34 PNG assets created and validated
  - app.json properly configured for single target
  - Root icon.png/cover.png added
- **Blockers**: PNG2TGA conversion error prevents successful build
- **Commit**: `3c73b1e` - Stable checkpoint with documented issue
- **Next Actions**: Research Zeus CLI PNG handling, explore workarounds

---

*Domain knowledge acquired through hands-on debugging and systematic investigation.*
