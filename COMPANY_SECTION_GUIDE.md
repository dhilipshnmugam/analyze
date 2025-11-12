# CompanySection Component - Integration Guide

## Overview
The `CompanySection` component is a full-screen slide designed to replicate the Autobio "Endocrine Hormone" Solutions slide design while maintaining the Royal Business aesthetic. It serves as the **second slide** in the main FullPageLayout sequence, immediately after the Hero Section.

## Features

### ✅ Full-Screen Background
- **Deep Navy Blue gradient** (#0A1931 dominant) with professional corporate aesthetic
- Subtle blurred background image overlay for depth
- Grid pattern overlay for texture
- Multiple gradient layers for visual richness

### ✅ Left Main Content Area
- **Large Serif Title**: "Company Overview" and dynamic sub-topic titles
- **Descriptive Paragraph**: Context-aware descriptions for each company topic
- **Statistics Display**: Three key metrics for each topic
- **"More Info" Button**: Gold/Bronze accent button with hover effects

### ✅ Right Large Graphic
- **Dynamic Icon Display**: Changes based on active tab
- **Glowing Effects**: Animated pulse effects with gradient rings
- **Abstract Network Lines**: SVG paths with gradient animations
- **Floating Particles**: Ambient motion effects

### ✅ Bottom Horizontal Navigation Bar
- **9 Navigation Tabs**:
  1. Company Profile
  2. Social Responsibilities
  3. Leadership Programme
  4. Investor Opportunity
  5. Our Vision
  6. Our Mission
  7. Our Culture
  8. Our Integrity
  9. Testimonials
- **Active State Styling**: Gold/Bronze accent for active tab
- **Hover Effects**: Smooth transitions and scaling
- **Glass-morphism Design**: Blurred background with transparency

### ✅ Persistent Elements
- Transparent header remains visible
- Left-side slide indicator (02/07) displays correctly
- Fixed right-side social/contact bar remains accessible
- All elements float over the full-screen slide

## Component Structure

```tsx
CompanySection
├── Full-Screen Background
│   ├── Deep Navy Blue Gradient
│   ├── Blurred Corporate Image
│   ├── Grid Pattern Overlay
│   └── Gradient Overlays
├── Top Section Label ("Company")
├── Main Content Area
│   ├── Left Column
│   │   ├── Title (Dynamic)
│   │   ├── Description (Dynamic)
│   │   ├── Statistics (3 metrics)
│   │   └── More Info Button
│   └── Right Column
│       ├── Glowing Icon (Dynamic)
│       ├── Animated Rings
│       ├── Network Lines
│       └── Floating Particles
└── Bottom Navigation Bar
    └── 9 Horizontal Tabs
```

## Integration Instructions

### Step 1: File Created
The component has been created at:
```
src/components/CompanySection.tsx
```

### Step 2: Export Added
The component is exported from `Sections.tsx` as:
```tsx
export const CompanyOverviewSection: React.FC = () => {
  return <CompanySection />;
};
```

### Step 3: Integrated into Main Page
The component is now the **second slide** in `src/app/page.tsx`:

```tsx
const sections = [
  { id: 'hero', name: 'Hero', component: HeroSection },
  { id: 'company', name: 'Company', component: CompanyOverviewSection }, // ← NEW SLIDE
  { id: 'products', name: 'Products', component: ProductsSection },
  { id: 'solutions', name: 'Solutions', component: SolutionsSection },
  { id: 'about', name: 'About', component: AboutSection },
  { id: 'news', name: 'News', component: NewsSection },
  { id: 'footer', name: 'Contact', component: FooterSection },
];
```

## Navigation Flow

The website now has **7 full-screen slides**:

1. **01/07** - Hero Section (with 3 internal sub-slides)
2. **02/07** - **Company Overview Section** ← **NEW SLIDE**
3. **03/07** - Products Section
4. **04/07** - Solutions Section
5. **05/07** - About Section
6. **06/07** - News Section
7. **07/07** - Footer/Contact Section

## Company Topics Content

Each of the 9 tabs contains specific content:

### 1. Company Profile
- **Focus**: Global leadership, experience, reach
- **Stats**: Founded 1999, 85+ Countries, 2,500+ Employees

### 2. Social Responsibilities
- **Focus**: Community health, sustainability, partnerships
- **Stats**: 150+ Communities, $5M+ Donations, 100% Green

### 3. Leadership Programme
- **Focus**: Talent development, mentorship, learning
- **Stats**: 50,000+ Hours, 500+ Participants, 95% Retention

### 4. Investor Opportunity
- **Focus**: Growth potential, innovation, financial performance
- **Stats**: 18% Growth, $850M Cap, 22% ROI

### 5. Our Vision
- **Focus**: Global partnership, innovation, patient outcomes
- **Stats**: 100% Innovation, 18% R&D, 200+ Patents

### 6. Our Mission
- **Focus**: Diagnostic excellence, accessibility, technology
- **Stats**: 50+ Products, 2M+ Tests, 99.8% Accuracy

### 7. Our Culture
- **Focus**: Excellence, collaboration, innovation
- **Stats**: 94% Satisfaction, 85% Diversity, 92% Innovation

### 8. Our Integrity
- **Focus**: Quality standards, ethics, compliance
- **Stats**: ISO 13485, 100% Compliance, 98% Audit

### 9. Testimonials
- **Focus**: Client trust, partnerships, reputation
- **Stats**: 4.9/5 Rating, 1,200+ Testimonials, 500+ Partnerships

## Customization Options

### Update Background Image
Replace the placeholder background in the component:
```tsx
backgroundImage: 'url(/images/corporate-background.jpg)'
```
Place your high-resolution corporate image at:
```
public/images/corporate-background.jpg
```

### Modify Colors
The component uses these Royal Business colors:
- **Primary**: Deep Navy Blue (#0A1931)
- **Accent**: Gold/Amber (#f59e0b)
- **Secondary**: Cyan (#06b6d4)
- **Text**: White/Silver (#ffffff, #e5e7eb)

### Add Topic-Specific Images
Each topic can have a custom image:
```tsx
image: '/images/company-profile.jpg'
```
Add images to `/public/images/` directory.

### Update Statistics
Modify the stats array for each topic:
```tsx
stats: [
  { label: 'Your Metric', value: 'Your Value' },
  { label: 'Another Metric', value: 'Another Value' },
  { label: 'Third Metric', value: 'Third Value' }
]
```

## Animation Features

### Framer Motion Animations
- **Page Transitions**: Smooth fade and slide animations
- **Tab Switching**: Active tab indicator slides smoothly
- **Icon Glow**: Pulsing glow effects on the main icon
- **Floating Particles**: Ambient motion in the background
- **Network Lines**: Animated SVG path drawing

### Hover States
- **Tabs**: Scale and background color transitions
- **More Info Button**: Scale, shadow, and icon translation
- **Active Tab**: Gold gradient with shadow

## Technical Details

### Dependencies
- **React**: Client-side component with useState
- **Framer Motion**: All animations and transitions
- **Lucide React**: Icon library for all icons
- **Tailwind CSS**: All styling and responsive design

### Performance
- Component uses `AnimatePresence` for smooth tab transitions
- Icons are dynamically loaded based on active tab
- Background effects use CSS transforms for GPU acceleration

## Testing

### Verify Integration
1. Navigate to http://localhost:3000
2. Scroll down from Hero Section (or press Down Arrow)
3. You should see the Company Overview Section as slide 02/07
4. Click different tabs in the bottom navigation
5. Verify smooth transitions and animations

### Check Responsive Design
- The component is optimized for desktop (lg breakpoints)
- Bottom tabs show icons only on smaller screens
- Two-column layout maintains proper spacing

## Troubleshooting

### If the component doesn't appear:
1. Check that `CompanyOverviewSection` is imported in `page.tsx`
2. Verify it's in the sections array as the second item
3. Ensure the dev server recompiled successfully

### If animations are choppy:
1. Check browser GPU acceleration is enabled
2. Reduce the number of floating particles
3. Simplify gradient effects

### If tabs don't work:
1. Verify `activeTab` state is updating (check React DevTools)
2. Check console for any JavaScript errors
3. Ensure all topic IDs are unique

## Future Enhancements

### Potential Additions
- [ ] Add click handlers for "More Info" buttons to navigate to `/company` page
- [ ] Implement image loading for topic-specific visuals
- [ ] Add video background option
- [ ] Create mobile-responsive version with vertical tabs
- [ ] Add keyboard navigation for tabs (arrow keys)
- [ ] Implement swipe gestures for tab switching on touch devices

## Summary

✅ **Component Created**: `src/components/CompanySection.tsx`
✅ **Exported**: From `src/components/Sections.tsx`
✅ **Integrated**: Into main page as **slide 02/07**
✅ **Tested**: No TypeScript errors, compiled successfully
✅ **Features**: All requested design elements implemented
✅ **Animations**: Smooth transitions and hover effects
✅ **Navigation**: 9 horizontal tabs with dynamic content

The `CompanySection` component is now fully integrated and ready to use! 🎉
