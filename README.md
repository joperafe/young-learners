# English Young Learners Conference – Braga 2025

A modern, responsive single-page web application for the English Young Learners Conference hosted by IH Braga in March 2025.

![Conference Banner](https://via.placeholder.com/1200x400/002b5c/ffffff?text=English+Young+Learners+Conference+Braga+2025)

## 🌟 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Map**: Explore Braga with key locations and points of interest
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Ready for deployment on Vercel

## 🎯 Conference Details

- **Date**: March 15–16, 2025
- **Location**: Braga, Portugal
- **Host**: IH Braga
- **Focus**: Inspiring Young Minds through English Learning

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Mapbox GL JS with React Map GL
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd young-learners-conference
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Mapbox (Optional)**
   - Create a free account at [Mapbox](https://account.mapbox.com/)
   - Get your access token from [Access Tokens page](https://account.mapbox.com/access-tokens/)
   - Create a `.env.local` file and add your token:
   ```bash
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
   ```
   *Note: The app includes a demo token that works for development*

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Page Sections

1. **Header**: Fixed navigation with smooth scroll
2. **Hero**: Conference title, dates, and call-to-action
3. **About**: Conference description and IH Braga information
4. **Highlights**: Key conference features and schedule
5. **Map**: Interactive map of Braga with points of interest
6. **Footer**: Contact information and social links

## 🗺️ Map Features

The interactive map includes:
- **IH Braga**: Main conference venue
- **Bom Jesus do Monte**: UNESCO World Heritage site
- **Braga Cathedral**: Historic cathedral
- **Theatro Circo**: Cultural center

## 🎨 Design

The design follows IH Braga's brand guidelines:
- **Colors**: Navy blue (#002b5c) and red (#b51c2c)
- **Typography**: Clean, modern sans-serif fonts
- **Layout**: Clean white backgrounds with strategic color accents
- **Inspiration**: Based on ihbraga.com and explore.porto.pt

## 📦 Project Structure

```
young-learners-conference/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── Map.tsx
│   └── MapSection.tsx
├── public/
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Push to your repository**
2. **Connect to Vercel**
3. **Deploy automatically**

The build configuration is already set up for optimal performance.

## 📞 Contact

For conference inquiries:
- **Website**: [ihbraga.com](https://www.ihbraga.com)
- **Email**: conference@ihbraga.com
- **Phone**: +351 253 123 456
- **Address**: R. do Anjo 90, 4700-305 Braga, Portugal

## 📄 License

© 2025 IH Braga. All rights reserved.

---

*Built with ❤️ for young English learners in Braga*