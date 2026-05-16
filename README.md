# 🖼️ PosterVerse — Premium Poster eCommerce Website
### University Project | Built with Next.js + Tailwind CSS

---

## 📁 Project Structure (What Every File Does)

```
posterverse/
├── src/
│   ├── app/                  ← All your PAGES live here
│   │   ├── page.tsx          ← Homepage (/)
│   │   ├── shop/page.tsx     ← Shop page (/shop)
│   │   ├── product/[id]/     ← Product detail (/product/1, /product/2, etc.)
│   │   ├── cart/page.tsx     ← Cart page (/cart)
│   │   ├── about/page.tsx    ← About page (/about)
│   │   ├── contact/page.tsx  ← Contact page (/contact)
│   │   ├── layout.tsx        ← Root layout (wraps ALL pages - Navbar & Footer)
│   │   └── globals.css       ← Global styles
│   │
│   ├── components/           ← Reusable building blocks
│   │   ├── Navbar.tsx        ← Top navigation bar
│   │   ├── Footer.tsx        ← Bottom footer
│   │   └── ProductCard.tsx   ← Product card used on multiple pages
│   │
│   ├── context/
│   │   └── CartContext.tsx   ← The CART SYSTEM (add/remove/count items)
│   │
│   ├── lib/
│   │   └── products.ts       ← ALL PRODUCT DATA IS HERE ← Edit this to change products
│   │
│   └── types/
│       └── index.ts          ← TypeScript type definitions
│
├── public/                   ← Images, icons, etc. (static files)
├── package.json              ← Project dependencies
├── tailwind.config.ts        ← Tailwind CSS configuration
├── next.config.mjs           ← Next.js configuration
└── tsconfig.json             ← TypeScript configuration
```

---

## 🚀 How to Run Locally (Step by Step)

### Step 1: Make sure you have Node.js installed
- Go to https://nodejs.org
- Download and install the **LTS version** (recommended)
- To verify: open Terminal/Command Prompt and type: `node --version`

### Step 2: Open your project folder
```bash
# Open Terminal/Command Prompt
# Navigate to where you downloaded the project
cd posterverse
```

### Step 3: Install dependencies (only needed once!)
```bash
npm install
```
This downloads all the required packages (Next.js, Framer Motion, etc.)
Wait for it to finish (takes 1-2 minutes).

### Step 4: Start the development server
```bash
npm run dev
```

### Step 5: Open in browser
Go to: **http://localhost:3000**

You should see the PosterVerse homepage! 🎉

---

## ✏️ How to Edit Products

All products are in **`src/lib/products.ts`**

### To change a product's details:
```typescript
{
  id: 1,                    ← Unique number (don't change this)
  name: "Your New Title",   ← Change this
  price: 1500,              ← Price in Pakistani Rupees
  originalPrice: 2000,      ← Strikethrough price (delete this line if no sale)
  description: "Describe your poster here...",
  image: "URL_TO_IMAGE",    ← Use any Unsplash URL
  rating: 4.8,              ← Out of 5
  reviews: 150,             ← Number of reviews shown
  category: "Anime",        ← Must match a category name
  badge: "New",             ← Optional: "New", "Sale", "Hot", "Best Seller"
  featured: true,           ← Shows on homepage (remove if you don't want it there)
},
```

### To add a new product:
Copy any existing product block, paste it at the end of the array, change the `id` to a new number, and update the details.

### Categories available:
- `"Anime"` - Anime posters
- `"Gaming"` - Gaming posters
- `"Cars"` - Car posters
- `"Nature"` - Nature posters
- `"Islamic"` - Islamic wall art
- `"Motivational"` - Motivational posters

### To find free product images:
1. Go to **https://unsplash.com**
2. Search for what you need
3. Click on an image
4. Copy the URL from your browser address bar
5. Add `?w=600&q=80` at the end for optimization

---

## 🎨 How to Change Colors

Colors are defined in **`tailwind.config.ts`** and **`src/app/globals.css`**

### To change the main orange accent color:
In `globals.css`, find:
```css
--orange: #f97316;
```
Change `#f97316` to any color you want!

For example:
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Green: `#22c55e`
- Pink: `#ec4899`

Then also update in `tailwind.config.ts`, replace all `orange` references.

---

## 🔤 How to Change Fonts

In `src/app/layout.tsx`, find the Google Fonts link and change the font names.

Current fonts:
- **Headings**: Playfair Display (elegant serif)
- **Body text**: DM Sans (clean and modern)

Browse fonts at: **https://fonts.google.com**

---

## 🌐 Deployment to Vercel (Step by Step)

### Step 1: Create accounts (free!)
1. **GitHub**: https://github.com — Sign up for free
2. **Vercel**: https://vercel.com — Sign up with your GitHub account

### Step 2: Upload to GitHub
```bash
# In your project folder, run these commands one by one:

git init
git add .
git commit -m "Initial commit - PosterVerse website"
```

Then:
1. Go to **https://github.com/new**
2. Create a new repository named `posterverse`
3. Make it **Public**
4. Copy the commands GitHub shows you (they look like below) and run them:
```bash
git remote add origin https://github.com/YOUR_USERNAME/posterverse.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Click **"Import"** next to your `posterverse` repository
4. Keep all settings as default
5. Click **"Deploy"**
6. Wait ~2 minutes...
7. **Your website is LIVE!** 🎉

Vercel gives you a URL like: `https://posterverse-yourname.vercel.app`

### Step 4: Auto-deploy on every change
After setup, every time you push to GitHub:
```bash
git add .
git commit -m "Updated products"
git push
```
Vercel automatically deploys your new version!

---

## 🛒 How the Cart System Works

The cart is built using **React Context** (`src/context/CartContext.tsx`):

1. `CartProvider` wraps the whole app in `layout.tsx`
2. Any component can access the cart with `useCart()` hook
3. Cart data is saved in **localStorage** (survives page refresh)
4. The cart count badge on the navbar updates automatically

---

## 📱 Mobile Responsive
The website works on all screen sizes:
- **Mobile**: 2-column grid, hamburger menu, touch-friendly buttons
- **Tablet**: 3-column grid
- **Desktop**: 4-column grid, full navigation

---

## 🔧 Common Issues

**"npm install" fails?**
→ Make sure Node.js is installed: `node --version`

**Images not loading?**
→ Check `next.config.mjs` — Unsplash domain is already allowed

**Build error about missing module?**
→ Run `npm install` again

**Port 3000 already in use?**
→ Run `npm run dev -- -p 3001` to use port 3001

---

## 📊 Project Tech Stack Summary

| Tool | What It Does |
|------|-------------|
| **Next.js 14** | React framework for building web apps |
| **TypeScript** | JavaScript with type safety |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **React Context** | State management for cart |
| **localStorage** | Saves cart between refreshes |

---

*Built as a university project. Demo only — no real payments are processed.*
