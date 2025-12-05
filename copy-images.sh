#!/bin/bash

# Breast Reduction Website - Image Copy Script
# This script copies all images from the old HTML project to the Next.js public directory

echo "Starting image copy process..."
echo "================================"

# Define source and destination directories
SOURCE_DIR="../images"
DEST_DIR="./public/images"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ ERROR: Source directory not found: $SOURCE_DIR"
    echo "Please ensure you're running this script from the Next.js project root"
    exit 1
fi

# Create destination directory if it doesn't exist
if [ ! -d "$DEST_DIR" ]; then
    echo "📁 Creating destination directory: $DEST_DIR"
    mkdir -p "$DEST_DIR"
fi

# Copy all image directories
echo ""
echo "📸 Copying images..."
echo "-------------------"

# Use rsync if available (better for large transfers), otherwise use cp
if command -v rsync &> /dev/null; then
    echo "Using rsync for efficient copying..."
    rsync -av --progress "$SOURCE_DIR/" "$DEST_DIR/"
else
    echo "Using cp for copying..."
    cp -rv "$SOURCE_DIR"/* "$DEST_DIR/"
fi

# Verify copy was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Images copied successfully"
    echo "================================"
    echo ""

    # Count files in each directory
    echo "📊 Image Statistics:"
    echo "-------------------"

    if [ -d "$DEST_DIR/Hero image - 1920x1080" ]; then
        HERO_COUNT=$(find "$DEST_DIR/Hero image - 1920x1080" -type f | wc -l)
        echo "Hero images: $HERO_COUNT"
    fi

    if [ -d "$DEST_DIR/Hero image Google stars - 200x40" ]; then
        STARS_COUNT=$(find "$DEST_DIR/Hero image Google stars - 200x40" -type f | wc -l)
        echo "Review badge images: $STARS_COUNT"
    fi

    if [ -d "$DEST_DIR/Icons - 64x64" ]; then
        ICONS_COUNT=$(find "$DEST_DIR/Icons - 64x64" -type f | wc -l)
        echo "Accreditation icons: $ICONS_COUNT"
    fi

    if [ -d "$DEST_DIR/Our surgeons - 400x500" ]; then
        SURGEONS_COUNT=$(find "$DEST_DIR/Our surgeons - 400x500" -type f | wc -l)
        echo "Surgeon photos: $SURGEONS_COUNT"
    fi

    if [ -d "$DEST_DIR/Before and afters - 800x600" ]; then
        GALLERY_COUNT=$(find "$DEST_DIR/Before and afters - 800x600" -type f | wc -l)
        echo "Gallery images: $GALLERY_COUNT"
    fi

    TOTAL_COUNT=$(find "$DEST_DIR" -type f | wc -l)
    echo "-------------------"
    echo "Total images: $TOTAL_COUNT"

    echo ""
    echo "🎉 Migration complete! You can now run:"
    echo "   npm run dev"
    echo ""
    echo "Then visit http://localhost:3000 to view your site."
else
    echo ""
    echo "❌ ERROR: Image copy failed"
    echo "Please check permissions and try again"
    exit 1
fi
