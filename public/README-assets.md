# Required Assets for CBODY Website

## Video Files (Hero Section)
Place these files in the `/public` directory:

1. **hero-video.mp4** (< 2MB)
   - Professional massage scene or Bangkok hotel ambiance
   - Duration: 10-15 seconds loop
   - Resolution: 1920x1080 or higher
   - Optimized for web playback

2. **hero-video.webm** (< 2MB)
   - Same content as MP4, WebM format for better browser support
   - Fallback format for older browsers

3. **hero-poster.jpg** (< 200KB)
   - Static image shown while video loads
   - Same scene as the video first frame
   - WebP format preferred

## Images
1. **og-image.jpg** (1200x630px)
   - Open Graph image for social media sharing
   - Should include CBODY logo and key messaging
   - High quality, optimized for web

2. **logo.png** (Transparent background)
   - CBODY logo for structured data
   - Multiple sizes: 192x192, 512x512

## Optimization Notes
- Use tools like FFmpeg for video compression
- Convert images to WebP format where possible
- Ensure all assets are under the specified size limits
- Test loading performance on mobile devices

## Video Compression Example
```bash
# Compress video to under 2MB
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1920:1080 -acodec aac -b:a 128k hero-video.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus hero-video.webm
``` 