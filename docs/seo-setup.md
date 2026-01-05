# SEO Setup Guide for arieshenderson.com

This document outlines the SEO infrastructure and setup steps for the website.

## Technical SEO Infrastructure

### 1. Meta Tags System
- **Component**: `/components/SEO/MetaTags.tsx`
- **Usage**: Import `generateMetadata` function in page files
- **Features**:
  - Automatic title template: "[Page Title] | GetReal Buyer Agents Las Vegas"
  - Title max: 60 characters
  - Description max: 155 characters
  - Default OG image: `/images/og-default.jpg` (1200x630px)
  - Canonical URLs automatically generated
  - Open Graph and Twitter Card support

### 2. Schema Markup
Implemented JSON-LD schemas:
- **LocalBusiness/RealEstateAgent**: Site-wide in layout
- **BreadcrumbList**: Per page via Breadcrumb component
- **FAQPage**: For pages with FAQs
- **Place**: For neighborhood pages
- **Dataset**: For market statistics

### 3. Sitemap
- **Location**: `/app/sitemap.ts`
- **URL**: `https://www.arieshenderson.com/sitemap.xml`
- **Includes**: All static pages, neighborhood pages
- **Update Frequency**: Weekly for main pages, daily for blog/search

### 4. Robots.txt
- **Location**: `/public/robots.txt` and `/app/robots.ts`
- **Blocks**: `/api/`, `/signin`, `/signup`, `/admin`, `/error`
- **Sitemap Reference**: Points to sitemap.xml

### 5. Canonical URLs
- Every page has self-referencing canonical
- Absolute URLs: `https://www.arieshenderson.com/[path]`
- No trailing slashes (handled by redirects)
- Implemented via MetaTags component

### 6. Redirects
Configured in `next.config.js`:
- Trailing slashes → no trailing slashes
- `/signin` → `/`
- `/signup` → `/`
- `/error` → `/`
- `/blog-sidebar` → `/blog`
- `/blog-details` → `/blog`

## Google Search Console Setup

### Step 1: Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.arieshenderson.com`
3. Choose verification method:
   - **Recommended**: HTML file upload
   - **Alternative**: DNS record or HTML tag

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Submit: `https://www.arieshenderson.com/sitemap.xml`
3. Monitor for errors

### Step 3: Check for Crawl Errors
1. Go to "Coverage" report
2. Review any errors or warnings
2. Fix 404s, redirect chains, or blocked resources

### Step 4: Monitor Core Web Vitals
1. Go to "Core Web Vitals" report
2. Monitor LCP, FID, CLS scores
3. Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Step 5: Set Up Google Analytics 4
- **Tracking ID**: `G-EY6906F69Y` (already implemented)
- **Location**: In `layout.tsx`
- Verify tracking in GA4 dashboard

### Step 6: Connect Google Business Profile
1. Ensure GBP listing is verified
2. Add website URL: `https://www.arieshenderson.com`
3. Link GBP to Google Analytics (optional)

## Page-Specific Meta Tags

### Homepage
- **Title**: "Exclusive Buyer Agent Las Vegas | New Construction Representation"
- **Description**: "Las Vegas buyer's agent working exclusively for you—not the builder. We negotiate price, review contracts, and protect your interests. Free representation."

### About
- **Title**: "About Our Exclusive Buyer Agents | Las Vegas New Construction"
- **Description**: "ABR and CSP certified agents representing only buyers. No dual agency, no builder conflicts. Meet the team fighting for Las Vegas homebuyers."

### Contact
- **Title**: "Free Buyer Consultation | Las Vegas Exclusive Buyer Agent"
- **Description**: "Schedule a free consultation with a Las Vegas exclusive buyer agent. No pressure, no obligation. Just honest advice about your home purchase."

### Blog
- **Title**: "Las Vegas Real Estate Market Insights | Buyer Tips & Trends"
- **Description**: "Las Vegas housing market updates, new construction tips, and homebuyer guidance from exclusive buyer agents."

### Neighborhood Pages
- **Title Template**: "New Construction Homes in [Neighborhood] NV | Buyer Agent"
- **Description Template**: "Find new construction in [Neighborhood] with exclusive buyer representation. We negotiate with builders and protect your interests. Free service."

## Image Optimization Checklist

### Current Status
- ✅ Next.js Image component used
- ✅ External image domains configured
- ⚠️ Need to audit all images for:
  - Descriptive filenames
  - Alt text
  - Lazy loading
  - Proper sizing

### Action Items
1. Rename generic image files (auth-01.png → descriptive names)
2. Add alt text to all images
3. Implement lazy loading for below-fold images
4. Create OG image template (1200x630px)

## Heading Structure

### Rules
- One H1 per page only
- H1 contains primary keyword
- Logical nesting: H1 > H2 > H3 (no skipping)
- No H tags for styling

### Current Status
- ✅ Homepage: Single H1 in HeroSection
- ✅ Neighborhood pages: Single H1 in NeighborhoodHero
- ⚠️ Need to audit all pages for proper hierarchy

## Internal Linking Strategy

### Link Hierarchy
1. **Homepage** → All main service pages
2. **Service pages** → Relevant neighborhoods
3. **Neighborhood pages** → Cross-link to each other
4. **All pages** → Contact/consultation

### Anchor Text Best Practices
- ✅ Use descriptive anchor text
- ✅ Include keywords naturally
- ❌ Avoid "click here", "learn more"

## Mobile Optimization

### Checklist
- ✅ Viewport meta tag present
- ✅ Responsive design (Tailwind CSS)
- ✅ Touch targets minimum 48x48px
- ✅ Clickable phone numbers (`tel:` links)
- ⚠️ Need to verify: No horizontal scrolling, readable font sizes

## Performance Optimization

### Implemented
- ✅ Font preconnect
- ✅ Next.js Image optimization
- ✅ Code splitting (dynamic imports)

### To Implement
- Preload hero images
- Defer non-critical JavaScript
- Optimize font loading

## Legal Pages

### Created
- ✅ `/privacy-policy` - Privacy Policy page
- ✅ `/terms` - Terms of Service page
- ✅ Footer links updated

## Monitoring & Maintenance

### Monthly Tasks
1. Review Google Search Console for errors
2. Check Core Web Vitals scores
3. Monitor keyword rankings
4. Update sitemap if new pages added
5. Review and update meta descriptions

### Quarterly Tasks
1. Audit internal linking structure
2. Review and update content freshness
3. Check for broken links
4. Update schema markup if needed
5. Review competitor SEO strategies

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Schema.org Documentation](https://schema.org)
- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
