# Facelift Image Setup Guide

Your facelift configuration has been created! Now you need to organize your images in the correct folder structure.

---

## 📁 Required Folder Structure

Create the following folders in your project:

```
public/images/facelift/
├── hero/
│   └── facelift-hero-background.png    (1920x1080 pixels)
└── gallery/
    ├── Facelift before and after 1.png  (800x600 pixels)
    ├── Facelift before and after 2.png
    ├── Facelift before and after 3.png
    ├── ...
    └── Facelift before and after 30.png (30 images total)
```

---

## 🖼️ Image Requirements

### Hero Background Image
- **Filename:** `facelift-hero-background.png`
- **Location:** `public/images/facelift/hero/`
- **Dimensions:** 1920×1080 pixels (16:9 ratio)
- **Format:** PNG or JPG
- **Purpose:** Background image for the hero section

### Gallery Images (30 images)
- **Naming Pattern:** `Facelift before and after {num}.png`
  - Example: `Facelift before and after 1.png`
  - Example: `Facelift before and after 2.png`
  - ... up to 30
- **Location:** `public/images/facelift/gallery/`
- **Dimensions:** 800×600 pixels (4:3 ratio)
- **Format:** PNG or JPG
- **Purpose:** Before/after comparison photos

---

## ⚠️ Important Notes

1. **Exact Naming:** File names must match exactly (case-sensitive)
2. **Number Sequential:** Number your files 1-30 consecutively
3. **No Gaps:** Don't skip numbers (e.g., don't jump from 5 to 7)
4. **Optimize Images:** Compress images before uploading for faster loading

---

## 🎬 YouTube Video

**Action Required:** You need to provide the YouTube video ID for your facelift surgery video.

**Current Status:** Placeholder value set (`PLACEHOLDER_VIDEO_ID`)

**To Update:**
1. Upload your facelift surgery video to YouTube
2. Get the video ID (example: for `https://www.youtube.com/watch?v=ABC123`, the ID is `ABC123`)
3. Update line 113 in `lib/config/procedures/facelift.ts`
4. Change `youtubeId: 'PLACEHOLDER_VIDEO_ID'` to your actual video ID

---

## ✅ Quick Setup Commands

### Step 1: Create Folders
```bash
cd "/Users/vasukarri/Desktop/Saas & AI projects/6. Facelift before and after nextjs"
mkdir -p public/images/facelift/hero
mkdir -p public/images/facelift/gallery
```

### Step 2: Add Your Images
Copy your images into the created folders with the correct names.

### Step 3: Verify Structure
```bash
ls -la public/images/facelift/hero/
ls -la public/images/facelift/gallery/
```

You should see:
- 1 hero background image in `hero/`
- 30 gallery images in `gallery/`

---

## 🧪 Testing

### Test with Development Server
```bash
# Set the procedure to facelift
export NEXT_PUBLIC_PROCEDURE=facelift

# Run dev server
npm run dev

# Visit http://localhost:3000
```

### Check These Elements:
- [ ] Hero background image loads
- [ ] All 30 gallery images display
- [ ] Clicking gallery images opens lightbox
- [ ] All 8 FAQ questions display
- [ ] Pricing shows 3 options
- [ ] Forms work correctly

---

## 🚀 Building for Production

Once images are in place:

```bash
# Build the facelift site
npm run build:facelift

# Test production build
npm start

# Deploy to faceliftbeforeandafter.co.uk
```

---

## 📊 Image Checklist

Before building, verify:

- [ ] Hero folder created: `public/images/facelift/hero/`
- [ ] Gallery folder created: `public/images/facelift/gallery/`
- [ ] Hero image added (1920x1080)
- [ ] 30 gallery images added (800x600 each)
- [ ] All images use correct naming pattern
- [ ] No missing numbers in sequence (1-30)
- [ ] Images are optimized/compressed
- [ ] YouTube video ID updated in config

---

## 🆘 Troubleshooting

**Images don't load:**
- Check file paths match exactly
- Verify images are in `public/images/` not `images/`
- Check file extensions (.png vs .jpg)

**Some images missing in gallery:**
- Verify you have exactly 30 images
- Check numbering is sequential (no gaps)
- Ensure file names match pattern exactly

**Hero background doesn't show:**
- Check file name is exactly `facelift-hero-background.png`
- Verify image is in `hero/` subfolder
- Check image dimensions (should be 1920x1080)

---

## 📞 Need Help?

If you encounter issues:
1. Check folder structure matches exactly
2. Verify image file names (case-sensitive!)
3. Check browser console for 404 errors
4. Test with browser DevTools Network tab

---

**Ready to build?** Once all images are in place, run:
```bash
npm run build:facelift
```

Good luck with your facelift website! 🎉
