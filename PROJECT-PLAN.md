# Amazfit Watchface Development Project Plan

**Project Name**: Amazfit Watchfaces
**Created**: January 12, 2026
**Status**: Planning Phase
**Target Platform**: ZeppOS (Amazfit smartwatches)

---

## 🎯 Project Overview

Create custom watchfaces for Amazfit devices running ZeppOS. This project will leverage existing open-source tools, community resources, and official Zepp documentation to develop unique, functional watchface designs.

---

## 📊 Research Summary

### GitHub Projects Discovered

| Project | Stars | Description | Technology | Status |
|---------|-------|-------------|------------|--------|
| **[novvember/amazfit-watchfaces](https://github.com/novvember/amazfit-watchfaces)** | 40⭐ | 45+ watchfaces for round Amazfit (ZeppOS) | JavaScript | Active (3 days ago) |
| **[v1ack/watchfaceEditor](https://github.com/v1ack/watchfaceEditor)** | 177⭐ | Bip/Cor/Mi Band 4 watchface viewer & editor | JavaScript | Maintained |
| **[zepp-health/zeppos-samples](https://github.com/zepp-health/zeppos-samples)** | 192⭐ | Official ZeppOS sample code | JavaScript | Official/Active |
| **[GreatApo/GreatFit](https://github.com/GreatApo/GreatFit)** | 119⭐ | APK watchface with features | Java | Legacy |
| **[SashaCX75/AmazFit_Watchface_Editor_2](https://github.com/SashaCX75/AmazFit_Watchface_Editor_2)** | 18⭐ | GTR2/GTS2 Watch Face Editor | C# | Maintained |
| **[EXOMODE/amazfitutils](https://github.com/EXOMODE/amazfitutils)** | 38⭐ | Tools for working with watchfaces | C# | Maintained |

### Official Resources

| Resource | URL | Purpose |
|----------|-----|---------|
| **ZeppOS Documentation** | https://docs.zepp.com/docs/intro/ | Official development guide |
| **Quick Start Guide** | https://docs.zepp.com/docs/guides/quick-start/ | Getting started tutorial |
| **Watchface Maker** | https://watchface.zepp.com/ | Official visual watchface creator |
| **Developer Portal** | https://developer.zepp.com/os/home | SDK, tools, hackathons |
| **Zeus CLI** | https://docs.zepp.com/docs/guides/tools/cli/ | Command-line development tool |
| **Simulator** | https://docs.zepp.com/docs/guides/tools/simulator/ | Test without physical device |
| **API Reference** | https://docs.zepp.com/docs/watchface/api/hmUI/createWidget/ | Widget API documentation |

### Community Resources

| Community | URL | Activity |
|-----------|-----|----------|
| **Reddit r/amazfit** | https://www.reddit.com/r/amazfit/ | Active - watchface discussions |
| **Zepp Discord** | https://t.zepp.com/t/b6e70 | Official developer community |
| **GitHub Discussions** | https://github.com/orgs/zepp-health/discussions | Technical Q&A |
| **YouTube - Zepp OS** | https://www.youtube.com/channel/UCU8LoAkoGotUNL82arnib5w | Video tutorials |
| **4pda.to Forums** | https://4pda.to/forum/index.php?showtopic=1055207 | Russian community (GTR 4) |
| **Unofficial Zepp Store** | https://mmk.pw/en/zepp_explorer/ | Alternative watchface repository |

### 2025 Zepp OS Global Online Hackathon

- **Status**: Currently Active!
- **URL**: https://developer.zepp.com/os/2025/global-online-hackathon
- **Opportunity**: Participate for prizes and community recognition

---

## 🔧 Development Approaches

### Approach 1: Official Watchface Maker (No-Code)

**Best for**: Quick designs, beginners, simple watchfaces

```
Tool: https://watchface.zepp.com/
Pros: Visual editor, no coding required, direct publishing
Cons: Limited customization, no advanced features
```

### Approach 2: ZeppOS SDK (Code-Based)

**Best for**: Complex watchfaces, custom widgets, advanced features

**Technology Stack**:
- **Language**: JavaScript
- **CLI Tool**: Zeus CLI
- **Testing**: Zepp Simulator
- **API Version**: ZeppOS 4.0+ (for Amazfit Active line)

**Quick Start Steps**:
1. Environmental Preparation
2. Install Zeus CLI: `npm install -g @zeppos/zeus-cli` ✅ DONE
3. Create Project: `zeus create my-watchface` (select WATCHFACE, OS 4.0)
4. Run Simulator for development
5. Preview on physical watch
6. Submit to Zepp Store

### Approach 3: Legacy Editor Tools (Older Devices)

**Best for**: Amazfit Bip, Cor, Mi Band 4, older models

**Tools**:
- v1ack/watchfaceEditor (web-based)
- AmazFit_Watchface_Editor (desktop)

---

## 📱 Target Devices: Amazfit Active Line

### 🎯 Primary Target: Amazfit Active Family

| Device | Shape | Resolution | AOD Resolution | API Level | Zepp OS | Editable |
|--------|-------|------------|----------------|-----------|---------|----------|
| **Amazfit Active** | Square | 390×450 | 266×307 | 3.6 | 4.0 | ✅ YES |
| **Amazfit Active 2 (Round)** | Round | 466×466 | 314×314 | 4.2 | 5.0 | ✅ YES |
| **Amazfit Active 2 (Square)** | Square | 390×450 | 266×307 | 4.2 | 5.0 | ✅ YES |
| **Amazfit Active Max** | Round | 480×480 | 324×324 | 4.2 | 5.0 | ✅ YES |
| **Amazfit Active Edge** | Round | 360×360 | 243×243 | 3.5 | 3.5 | ❌ NO |

### Device Sources (for app.json)

```javascript
// Amazfit Active
"deviceSource": 8323328  // China: 8323328*, Global: 8323329

// Amazfit Active 2 (Round)
"deviceSource": 8913152  // Multiple variants: 8913152*, 8913153, 8913155, 8913159, 10092800*, 10092801, 10092803, 10092807

// Amazfit Active 2 (Square)
"deviceSource": 10223872  // 10223872*, 10223873, 10223875

// Amazfit Active Max
"deviceSource": 10813697  // 10813697, 10813699

// Amazfit Active Edge
"deviceSource": 8388864  // 8388864*, 8388865
```

### Key Design Considerations for Active Line

| Aspect | Square Models | Round Models |
|--------|---------------|--------------|
| **Aspect Ratio** | 86 (tall rectangle) | N/A (circular) |
| **Corner Radius** | Consider rounded corners | Full circle mask |
| **Layout** | Vertical stack works well | Radial/centered layouts |
| **Widget Placement** | Top/bottom zones | Around perimeter |

### Compatible Devices (Secondary)

| Device | Shape | Resolution | API Level | Notes |
|--------|-------|------------|-----------|-------|
| Amazfit Bip 6 | Square | 390×450 | 4.2 | Same res as Active |
| Amazfit GTS 4 | Square | 390×450 | 3.6 | Same res as Active |
| Amazfit Balance 2 | Round | 480×480 | 4.2 | Same res as Active Max |

---

## 🚀 Development Phases

### Phase 1: Environment Setup ✅ COMPLETE

- [x] Install Node.js and npm (v22.14.0)
- [x] Install Zeus CLI globally (v1.8.1)
- [x] Clone reference repository → `reference-watchfaces/`
- [x] Create first watchface project → `watchfaces/active-max-minimal/`
- [ ] Set up Zepp Simulator (v2.0.2 download initiated)
- [ ] Create Zepp developer account
- [ ] Join Discord community

### Phase 2: Learning & Prototyping (Current)

- [ ] Complete official Quick Start tutorial
- [ ] Study reference watchfaces for **round layouts** (Active Max: 480×480)
- [ ] Understand watchface states (Normal, AOD, Editable)
- [ ] Learn hmUI widget system for ZeppOS 4.2+
- [x] Create first watchface targeting **Amazfit Active Max**
- [ ] Create image assets (digits, icons)
- [ ] Test in simulator

### Phase 3: Design & Development

- [ ] Design watchface concepts for **480×480 round** (Active Max - PRIMARY)
- [ ] Design watchface concepts for **466×466 round** (Active 2 Round)
- [ ] Design watchface concepts for **390×450 square** (Active/Active 2 Square)
- [ ] Implement core time display
- [ ] Add health/fitness widgets (steps, heart rate, etc.)
- [ ] Implement AOD mode (324×324 for Active Max)
- [ ] Add editable customization options

### Phase 4: Testing & Refinement

- [ ] Test on Amazfit Active device
- [ ] Optimize battery usage
- [ ] Test all display states (Normal, AOD, Edit)
- [ ] Gather feedback from community
- [ ] Fix bugs and polish

### Phase 5: Publishing

- [ ] Prepare assets for store (icons, screenshots)
- [ ] Write descriptions
- [ ] Submit to official Zepp Store
- [ ] Share on community platforms

---

## 📁 Recommended Project Structure

```
Amazfit/
├── .github/                    # Alex cognitive architecture
├── domain-knowledge/           # Alex domain knowledge
├── watchfaces/                 # Watchface projects
│   ├── my-first-watchface/
│   │   ├── app.json           # App configuration
│   │   ├── page/
│   │   │   └── index.js       # Main watchface logic
│   │   ├── assets/
│   │   │   ├── images/        # PNG assets
│   │   │   └── fonts/         # Custom fonts
│   │   └── README.md
│   └── [other-watchfaces]/
├── tools/                      # Utility scripts
├── docs/                       # Design documents
│   ├── concepts/              # Watchface concept sketches
│   └── research/              # Reference materials
├── PROJECT-PLAN.md            # This file
└── README.md                  # Project overview
```

---

## 🎨 Watchface Ideas

### Concept 1: Minimalist Digital

- Clean time display
- Single accent color
- Essential metrics only (steps, battery)
- Elegant AOD mode

### Concept 2: Fitness Dashboard

- Prominent health metrics
- Progress rings for goals
- Heart rate zone indicator
- Activity summary

### Concept 3: Retro/Pixel Art

- 8-bit aesthetic
- Animated elements
- Game-inspired design
- Nostalgic appeal

### Concept 4: Information Dense

- Multiple data points
- Weather integration
- Calendar events
- Modular layout

---

## 📚 Learning Resources

### Official Documentation

1. [Introduction to Zepp OS](https://docs.zepp.com/docs/intro/)
2. [Quick Start Guide](https://docs.zepp.com/docs/guides/quick-start/)
3. [Watchface API - hmUI.createWidget](https://docs.zepp.com/docs/watchface/api/hmUI/createWidget/)
4. [Device List & Specifications](https://docs.zepp.com/docs/reference/related-resources/device-list/)

### Video Tutorials

- [YouTube: Zepp OS Program Environment Setup](https://www.youtube.com/watch?v=RPyTge0kjWQ)
- [Zepp OS YouTube Channel](https://www.youtube.com/channel/UCU8LoAkoGotUNL82arnib5w)

### Reference Repositories

1. **novvember/amazfit-watchfaces** - 45+ production watchfaces with source
2. **zepp-health/zeppos-samples** - Official sample code
3. **v1ack/watchfaceEditor** - Legacy device editor

---

## ⚠️ Important Notes

### ZeppOS Version Compatibility

- **ZeppOS 1.0**: Older devices, limited features
- **ZeppOS 2.0+**: Modern devices, custom fonts, enhanced widgets
- **ZeppOS 3.0+**: Latest features, best for new development
- **ZeppOS 4.0+**: Newest API level (Amazfit Active 2, etc.)

### Key Technical Considerations

1. **Custom Fonts**: Require ZeppOS 2.0+ - restart watch after installation
2. **AOD Mode**: Must be explicitly implemented for battery efficiency
3. **Editable State**: Consider user customization options
4. **Asset Optimization**: PNG images should be optimized for size
5. **Multiple Resolutions**: Create assets for different device sizes

### Distribution Options

1. **Official Zepp Store** - Requires approval, widest reach
2. **GitHub Releases** - Direct .zip distribution
3. **QR Code Installation** - Developer mode required
4. **Unofficial Repositories** - Community platforms

---

## 🔗 Quick Links

| Resource | Link |
|----------|------|
| Zepp OS Docs | https://docs.zepp.com/ |
| Watchface Maker | https://watchface.zepp.com/ |
| Developer Portal | https://developer.zepp.com/os/home |
| Discord Community | https://t.zepp.com/t/b6e70 |
| GitHub Discussions | https://github.com/orgs/zepp-health/discussions |
| Reddit r/amazfit | https://www.reddit.com/r/amazfit/ |

---

## Next Steps

1. **Immediate**: Set up development environment
2. **This Week**: Complete Quick Start tutorial
3. **This Month**: Create first working watchface prototype
4. **Goal**: Publish to Zepp Store

---

*Plan created with Alex cognitive architecture assistance*
