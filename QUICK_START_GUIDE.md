# Quick Start Guide - Multi-Procedure Template System

Welcome to your Next.js multi-procedure website template system! This guide will help you create and deploy new procedure websites.

---

## 🚀 Current Status

✅ **System is fully functional!**
- Infrastructure complete
- 17 reusable components created
- Breast reduction website configured and running
- Build scripts ready for 9 procedures

**Live Development Server:** http://localhost:3000

---

## 📋 How to Add a New Procedure

### Step 1: Fill Out Content Template

1. Open `CONTENT_TEMPLATE.md`
2. Copy the entire template
3. Create a new file: `content-{procedure-name}.md`
4. Fill in all sections with your content
5. Run through the validation checklist at the end

**Example:** `content-facelift.md`

### Step 2: Prepare Images

Organize your images in this structure:
```
public/images/{procedure-name}/
├── hero/
│   └── {procedure}-hero-background.png    (1920x1080)
└── gallery/
    ├── {procedure} before and after 1.png  (800x600)
    ├── {procedure} before and after 2.png
    ├── ...
    └── {procedure} before and after 20.png
```

**If using gallery filters (e.g., Tummy Tuck):**
```
public/images/tummy-tuck/
└── gallery/
    ├── small/
    │   ├── Tummy tuck small 1.png
    │   └── ...
    ├── medium/
    │   └── ...
    └── large/
        └── ...
```

### Step 3: Create Config File

Your developer will:
1. Create `lib/config/procedures/{procedure-id}.ts`
2. Convert your content template into the config format
3. Reference your organized images

### Step 4: Test Locally

```bash
# Set the environment variable for the procedure
export NEXT_PUBLIC_PROCEDURE=facelift

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Step 5: Build for Production

```bash
# Build specific procedure
npm run build:facelift

# Or build all procedures at once
npm run build:all
```

### Step 6: Deploy

Each procedure gets its own deployment:
```bash
# After building, the .next folder contains the static site
# Deploy this to your hosting (Vercel, Netlify, etc.)
# Configure domain: faceliftbeforeandafter.co.uk
```

---

## 🏗️ Project Structure

```
6. Facelift before and after nextjs/
├── lib/
│   ├── types/                    # TypeScript interfaces
│   ├── config/
│   │   ├── shared.ts            # Shared across all procedures
│   │   └── procedures/          # One file per procedure
│   │       ├── breast-reduction.ts  ✅ Complete
│   │       ├── facelift.ts          📝 To create
│   │       ├── tummy-tuck.ts        📝 To create
│   │       └── ...                  📝 7 more
│   └── utils/
│       └── get-config.ts        # Loads correct config
├── components/
│   ├── common/                   # 6 shared components
│   └── sections/                 # 11 section components
├── app/
│   ├── page.tsx                 # Main page (52 lines!)
│   ├── layout.tsx               # Dynamic metadata
│   └── globals.css              # All styling
└── public/
    └── images/
        ├── shared/               # Hospital, surgeons, logos
        ├── breast-reduction/     ✅ Complete
        ├── facelift/             📝 To add
        └── ...                   📝 8 more
```

---

## 🔧 Build Scripts Available

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (uses default procedure) |
| `npm run build:breast-reduction` | Build breast reduction site |
| `npm run build:facelift` | Build facelift site |
| `npm run build:tummy-tuck` | Build tummy tuck site |
| `npm run build:arm-lift` | Build arm lift site |
| `npm run build:mummy-makeover` | Build mummy makeover site |
| `npm run build:breast-enlargement` | Build breast enlargement site |
| `npm run build:breast-enlargement-lift` | Build breast enlargement & lift site |
| `npm run build:lipoedema` | Build lipoedema site |
| `npm run build:thigh-lift` | Build thigh lift site |
| `npm run build:all` | Build all 9 procedures |

---

## 📝 Procedures to Create (9 Total)

1. ✅ **Breast Reduction** - Complete and running
2. 📝 **Facelift** - Need content
3. 📝 **Tummy Tuck** - Need content (with filters: Small, Medium, Large)
4. 📝 **Arm Lift** - Need content (with filters: Liposuction Only, Arm Lift)
5. 📝 **Mummy Makeover** - Need content
6. 📝 **Breast Enlargement** - Need content
7. 📝 **Breast Enlargement & Lift** - Need content
8. 📝 **Lipoedema** - Need content
9. 📝 **Thigh Lift** - Need content

---

## 🎯 Gallery Filter Setup

Some procedures need category filters. Here's how to set them up:

### Tummy Tuck Example (Small/Medium/Large)

In your content template, specify:
```
Gallery Filters Enabled: YES
Filter Categories: Small, Medium, Large
```

Then organize images:
```
public/images/tummy-tuck/gallery/
├── small/
│   ├── Tummy tuck small 1.png
│   ├── Tummy tuck small 2.png
│   └── ... (5 images)
├── medium/
│   └── ... (8 images)
└── large/
    └── ... (7 images)
```

### Procedures WITHOUT Filters

Most procedures use a simple gallery:
```
Gallery Filters Enabled: NO
```

Images go in single folder:
```
public/images/facelift/gallery/
├── Facelift before and after 1.png
├── Facelift before and after 2.png
└── ... (20-40 images)
```

---

## 🔍 Testing Checklist

Before deploying, test each feature:

### Hero Section
- [ ] Heading displays correctly
- [ ] Pricing widget shows correct prices
- [ ] Contact form submits successfully
- [ ] Google/Trustpilot ratings display

### About Section
- [ ] All 3 tabs work (Intro, Facilities, Location)
- [ ] Images display correctly
- [ ] Map loads

### Gallery
- [ ] All images display
- [ ] Clicking image opens lightbox (GLightbox)
- [ ] Navigation works in lightbox
- [ ] If filters enabled: filter tabs work

### Other Sections
- [ ] Pricing section shows correct prices
- [ ] Surgeons display with correct images
- [ ] YouTube video thumbnail loads
- [ ] FAQ accordion opens/closes correctly
- [ ] Contact form at bottom works
- [ ] Footer links work

### General
- [ ] All navigation links scroll to sections
- [ ] Cookie banner appears and can be accepted/rejected
- [ ] Page title correct (check browser tab)
- [ ] Meta description correct (view page source)

---

## 🚢 Deployment Process

### For Each Procedure:

1. **Build the site:**
   ```bash
   npm run build:facelift
   ```

2. **Test production build locally:**
   ```bash
   npm start
   # Visit http://localhost:3000
   ```

3. **Deploy to hosting:**
   - **Vercel:** `vercel --prod`
   - **Netlify:** Drag `.next` folder to Netlify
   - **Other:** Upload `.next` folder contents

4. **Configure domain:**
   - Point `faceliftbeforeandafter.co.uk` to deployment
   - Add SSL certificate
   - Test live site

5. **Repeat for all 9 procedures**

---

## 🆘 Troubleshooting

### Build Fails
**Error:** "Configuration not found for procedure"
**Solution:** Make sure procedure config file exists in `lib/config/procedures/`

### Images Don't Display
**Error:** 404 errors for images
**Solution:** Check image paths in config match actual files in `public/images/`

### Gallery Filters Don't Work
**Error:** No tabs showing
**Solution:** Verify `filters.enabled: true` in config and `byCategory` object populated

### Form Doesn't Submit
**Error:** Form submission fails
**Solution:** Check Web3Forms access key is correct in shared config

### Wrong Content Shows
**Error:** Different procedure content displays
**Solution:** Check `NEXT_PUBLIC_PROCEDURE` environment variable is set correctly

---

## 📚 Reference Documents

- **CONTENT_TEMPLATE.md** - Template for new procedure content
- **COMPONENT_CREATION_SUMMARY.md** - Technical component documentation
- **IMPLEMENTATION_GUIDE.md** - Detailed integration instructions
- **components/README.md** - Component API reference

---

## 🎓 Best Practices

### Content
- Keep meta descriptions under 155 characters
- Use clear, patient-friendly language
- Include 6-8 FAQ items minimum
- Provide detailed surgical explanations

### Images
- Before/after photos: 800x600 (4:3 ratio)
- Hero backgrounds: 1920x1080
- Optimize images before uploading
- Use consistent naming patterns

### SEO
- Unique title for each procedure
- Unique description for each procedure
- Include location keywords (Rotherham, South Yorkshire)
- Use proper heading hierarchy (H1, H2, H3)

### Testing
- Test on mobile devices
- Check all forms work
- Verify gallery loads properly
- Test with slow internet

---

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Review reference documents
3. Check the breast reduction example (already working)
4. Contact your developer with specific error messages

---

## 🎉 You're Ready!

Your multi-procedure template system is fully operational. Start by:

1. ✅ Testing the breast reduction site at http://localhost:3000
2. 📝 Filling out `CONTENT_TEMPLATE.md` for your next procedure
3. 📸 Preparing images for that procedure
4. 🚀 Building and deploying!

**Good luck with your 9 procedure websites!** 🎊

---

**Version:** 1.0
**Last Updated:** 2025-11-29
**System Status:** ✅ Production Ready
