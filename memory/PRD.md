# AriesXHit Landing Page - PRD

## Original Problem Statement
Create an ultra-cool aesthetic website for AriesXHit auto hitter Chrome extension with:
- Spider-Man theme (black and red colors)
- Tons of animations
- Direct download functionality
- Feature showcase
- Installation guide
- Telegram channel buttons and contact

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion + TSParticles
- **Backend**: FastAPI (minimal - mainly serving static content)
- **Styling**: Custom CSS with Spider-Man theme (black/red)

## User Personas
- **Primary**: Developers and automation enthusiasts looking for Stripe automation tools
- **Secondary**: Power users interested in browser extensions

## Core Requirements (Static)
1. Hero section with logo, animated title, version badge
2. Two Telegram channel redirect buttons in header
3. Feature showcase (12 features in bento grid)
4. Installation guide (5-step timeline)
5. Download section with CTA
6. Footer with Telegram contact
7. Mobile responsive design
8. Particle effects background
9. Smooth animations throughout

## What's Been Implemented (December 2025)
- [x] Full landing page with Spider-Man theme (black/red)
- [x] Hero section with floating logo, glitch title effect
- [x] Header with Main Channel & Backup Telegram buttons
- [x] 12 feature cards in responsive bento grid
- [x] 5-step installation timeline guide
- [x] Download section with performance specs
- [x] Footer with @MikeyyFrr contact
- [x] TSParticles spider-web background effect
- [x] Framer Motion animations throughout
- [x] Mobile responsive design
- [x] Custom fonts (Chakra Petch, Rajdhani, JetBrains Mono)

## Prioritized Backlog

### P0 (Critical - User Action Required)
- [ ] Replace placeholder Telegram channel URLs with real links
- [ ] Upload actual ariesxhit-extension.zip file for download

### P1 (High Priority - Future Enhancements)
- [ ] Add Google Analytics tracking
- [ ] Add video demo section
- [ ] Add changelog/updates section

### P2 (Nice to Have)
- [ ] Add dark/light mode toggle
- [ ] Add multi-language support
- [ ] Add testimonials section

## Next Tasks
1. User needs to update TG_MAIN_CHANNEL and TG_BACKUP_CHANNEL in App.js
2. User needs to upload real extension file to /frontend/public/
3. Consider adding download counter/analytics
