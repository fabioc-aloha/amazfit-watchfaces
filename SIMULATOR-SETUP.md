# Zepp Simulator Setup Guide

## Installation

1. **Download**: Zepp Simulator v2.0.2 for Windows
   - Download link: https://docs.zepp.com/docs/simulator/download/
   - Note: v2.0 and later does NOT require virtual network card installation

2. **Install**: Run the downloaded installer

3. **Launch**: Start "Zepp Simulator" from Start Menu

## Simulator Configuration

### Device Selection
1. Open Simulator
2. Click "Device" menu → "Select Device"
3. Choose **"Amazfit Active Max"** (480×480 round)
   - If not available, select any 480×480 round device

### Connecting to Zeus CLI

The simulator listens on `localhost` by default. Zeus CLI auto-discovers it.

## Running Your Watchface

### Method 1: Zeus Dev Server (Recommended)
```powershell
cd c:\Development\Amazfit\watchfaces\active-max-minimal
zeus dev
```
This starts a dev server with hot-reload. Changes to code auto-refresh on simulator.

### Method 2: Build and Install
```powershell
cd c:\Development\Amazfit\watchfaces\active-max-minimal
zeus build
zeus install
```

## Troubleshooting

### "Device not found" Error
1. Ensure Simulator is running
2. Check Simulator → Settings → Network is enabled
3. Try restarting both Simulator and Zeus

### "Connection refused" Error
```powershell
# Check if simulator port is open
Test-NetConnection -ComputerName localhost -Port 6927
```

### Build Errors
```powershell
# Clean and rebuild
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
zeus build --verbose
```

## Testing Features

### Time Display
- Simulator shows current system time
- Use Simulator → Time → Set Time to test specific times

### AOD Mode
- Simulator → Display → Toggle AOD

### Sensors
- Simulator → Sensors panel to simulate:
  - Heart Rate (BPM)
  - Steps count
  - Battery level

## Quick Reference

| Command | Description |
|---------|-------------|
| `zeus dev` | Start dev server with hot-reload |
| `zeus build` | Build .zpk package |
| `zeus install` | Install to running simulator |
| `zeus preview` | Generate watchface preview image |

## Resources

- [ZeppOS Simulator Docs](https://docs.zepp.com/docs/simulator/)
- [Zeus CLI Reference](https://docs.zepp.com/docs/guides/tools/zeus-cli/)
- [ZeppOS API Reference](https://docs.zepp.com/docs/reference/device-app-api/)
