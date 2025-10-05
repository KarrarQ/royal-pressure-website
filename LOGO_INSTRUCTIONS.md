# 🎨 Logo Setup Instructions

## IMPORTANT: Add Your Logo Image

The website is configured to display the Royal Pressure logo, but you need to add the image file.

### Step 1: Locate Your Logo

From the image attachments you provided, you have a Royal Pressure logo that looks like this:
- Crown with playing card symbols (spades, hearts, diamonds, clubs)
- Text "ROYAL PRESSURE"
- "SLOGAN HERE" subtitle

### Step 2: Save the Logo

1. **Save the logo image** from your attachments
2. **Name it:** `logo.png`
3. **Place it in:** `c:\Users\Qasim135\kennly\public\logo.png`

### Step 3: Logo Specifications

**Recommended Logo Dimensions:**
- **Width:** 400-800 pixels
- **Height:** 400-800 pixels (or proportional)
- **Format:** PNG with transparent background (preferred) or JPG
- **File size:** Under 500KB for fast loading

### Step 4: Verify Logo Appears

Once you add the logo:
1. Refresh the browser at `http://localhost:5173`
2. You should see the logo in:
   - ✅ Top navigation bar (smaller version)
   - ✅ Hero section center (larger version)

### Alternative: Use a Different Logo

If you want to use a different logo:
1. Save your logo as `logo.png` in the `public` folder
2. Or change the filename in these files:
   - `src/components/Navbar.jsx` (line 27)
   - `src/components/Hero.jsx` (line 25)
   - `index.html` (line 5)

### Quick Reference

**Current logo path in code:**
```jsx
<img src="/logo.png" alt="Royal Pressure" />
```

**File system path:**
```
c:\Users\Qasim135\kennly\public\logo.png
```

### If Logo Doesn't Show

The website will still work! The logo area will simply be hidden if the image file doesn't exist. But for the best professional appearance, definitely add it.

### Fallback Text

If you prefer text instead of an image logo, you can modify `Navbar.jsx`:

```jsx
// In Navbar.jsx, replace the img element with:
<span className="text-2xl font-bold text-blue-600">
  Royal Pressure
</span>
```

---

## 🎨 Slogan Update

I noticed your logo says "SLOGAN HERE" - your friend might want to update this to something like:

- "Professional Washing Services"
- "Portland's Trusted Power Washers"
- "Quality You Can See"
- "Exterior Cleaning Experts"

This can be done in any image editing software before saving as `logo.png`.

---

**Once the logo is added, you're 100% ready to deploy!** 🚀
