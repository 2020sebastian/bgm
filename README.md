# BonusTracker Landing Page

A compelling Next.js landing page for BonusTracker - the platform that helps users never miss bank bonuses again.

## Features

- **Hero Section**: Eye-catching headline with community stats and early access signup
- **Interactive Calculator**: Personalized earnings calculator based on state, credit score, and direct deposit status
- **Community Elements**: Real member testimonials and success stories
- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth transitions and engaging micro-interactions

## Design Elements Combined

This landing page combines the best elements from three variations:
- **Copy**: Compelling messaging from Sample.md focusing on pain points and solutions
- **Community Design**: Green color scheme and community elements from variation 5
- **Calculator Feature**: Interactive earnings calculator from variation 1
- **Signup Forms**: Clean "Get Early Access" and "Join 500 founding members" forms

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Technologies Used

- **Next.js 14**: React framework with optimized performance
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Modern state management
- **Responsive Design**: Mobile-first approach

## Key Components

- **Hero Section**: Main value proposition with community stats
- **Earnings Calculator**: Interactive tool to show potential earnings
- **Success Stories**: Real member testimonials and results
- **Community Stats**: Live member counter and achievement metrics
- **Multiple CTAs**: Strategic placement of signup forms throughout the page

## Customization

The landing page is designed to be easily customizable:
- Update member counts and stats in the component state
- Modify color scheme in `tailwind.config.js`
- Add new testimonials in the success stories section
- Adjust calculator logic for different states and criteria

## Performance Features

- **Server-side Rendering**: Fast initial page load
- **Optimized Images**: Next.js automatic image optimization
- **CSS Purging**: Unused CSS automatically removed
- **Code Splitting**: Automatic code splitting for optimal performance

## Analytics Ready

The landing page is prepared for analytics integration:
- Event tracking on form submissions
- Conversion tracking for signup flows
- User interaction monitoring capabilities
