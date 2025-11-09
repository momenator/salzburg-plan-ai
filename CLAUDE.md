# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Salzburg tourism application - a mobile-first web app for planning trips to Salzburg, Austria. The app helps users discover attractions, plan itineraries, and purchase the Salzburg Card for accessing tourist sites.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Development**: Managed via Lovable.dev platform

## Common Commands

```bash
# Install dependencies
npm i

# Run development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development (with dev mode settings)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm preview
```

## Architecture

### Application Structure

- **Entry Point**: `src/main.tsx` renders the root `App` component
- **App Shell**: `src/App.tsx` sets up providers and routing:
  - `QueryClientProvider` for data fetching
  - `TooltipProvider` for UI tooltips
  - `BrowserRouter` for client-side routing
  - `MobileLayout` wrapper with `BottomNav`
- **Mobile-First Design**: Constrained to max-width of 480px (`max-w-mobile`) with centered layout

### Routing Structure

All routes defined in `src/App.tsx`:

- `/` - Home (featured attractions)
- `/plan` - Trip planning wizard
- `/plan/list` - List of saved plans
- `/plan/chat` - AI chat interface for planning
- `/plan/review` - Review and finalize trip plan
- `/salzburg-card` - Salzburg Card info
- `/salzburg-card/buy` - Purchase flow
- `/salzburg-card/buy/pay` - Payment page
- `/places` - Browse all attractions
- `/place/:slug` - Individual place detail page
- `/account` - User account settings

### Key Components

- **MobileLayout** (`src/components/MobileLayout.tsx`): Main app wrapper that centers content and constrains width
- **BottomNav** (`src/components/BottomNav.tsx`): Persistent bottom navigation bar
- **MapView** (`src/components/MapView.tsx`): Google Maps integration boilerplate (currently a placeholder - see file comments for implementation instructions)
- **UI Components** (`src/components/ui/*`): shadcn/ui components - pre-built, customizable components

### Data Structure

- **Places** (`src/data/places.ts`): Static data for Salzburg attractions
  - Interface: `Place` with id, slug, name, descriptions, pricing, hours, accessibility, category
  - Images stored in `src/assets/`
  - Currently 5 featured places (Fortress, Mirabell, Mozart, Zoo, Hellbrunn)

### Styling System

- **Tailwind Config** (`tailwind.config.ts`): Custom theme extends default Tailwind
  - Mobile-optimized font sizes (base: 17px, lg: 19px, xl: 21px)
  - Custom color tokens using CSS variables (navbar, price, savings)
  - Font family: "Roboto Condensed"
  - Mobile breakpoint: `max-w-mobile` = 480px
- **Utility Function** (`src/lib/utils.ts`): `cn()` helper for merging Tailwind classes with clsx

### TypeScript Configuration

- Path alias `@/*` maps to `src/*`
- Relaxed type checking (noImplicitAny: false, strictNullChecks: false)
- References split between app and node configs

## Development Notes

### Google Maps Integration

The MapView component is currently a placeholder. To integrate Google Maps:

1. Get API key from Google Cloud Console
2. Install package: `npm install @googlemaps/js-api-loader`
3. Follow implementation example in `src/components/MapView.tsx` comments
4. Default center coordinates: `{ lat: 47.8095, lng: 13.0550 }` (Salzburg)

### Adding New Routes

1. Create page component in `src/pages/`
2. Import and add `<Route>` in `src/App.tsx`
3. Update BottomNav if it should appear in main navigation

### Adding New Places

Update `src/data/places.ts`:
1. Add image to `src/assets/`
2. Import image at top of file
3. Add new place object to `places` array with unique id and slug

### Component Development

- Use shadcn/ui components from `src/components/ui/` when possible
- Follow mobile-first responsive design (max 480px width)
- Apply active state styling: `active:scale-95` for touch feedback
- Use Tailwind color tokens (primary, secondary, muted, etc.) for theming

### Lovable Integration

This project uses lovable-tagger plugin for development mode component tracking. Changes pushed to this repo are reflected in the Lovable platform and vice versa.
