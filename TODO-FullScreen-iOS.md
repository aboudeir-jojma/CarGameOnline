# TODO: Fix FullScreen Button for iOS (iPhone)

## Steps to Complete:

1. **Analyze Current Implementation**
   - [x] Read FullScreenButton.tsx and related files
   - [x] Understand standard Fullscreen API usage

2. **Plan Implementation**
   - [x] Identify need for iOS detection and webkit methods
   - [x] Get user approval for plan

3. **Implement iOS Support**
   - [x] Add iOS detection using user agent
   - [x] Modify toggleFullscreen to use webkitEnterFullscreen for iOS
   - [x] Update event listeners for webkit fullscreen changes
   - [ ] Test the implementation

4. **Testing and Verification**
   - [ ] Run development server
   - [ ] Test on Android (should still work)
   - [ ] Test on iOS (via browser simulation or device)

## Notes:
- Current implementation works on Android but not iOS Safari
- Need to use webkitEnterFullscreen() and webkitExitFullscreen() for iOS
- Ensure backward compatibility with existing Android functionality
