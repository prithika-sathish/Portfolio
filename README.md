# Prithika Sathish - Portfolio Website

A stunning React + Next.js portfolio website featuring glassmorphism design, smooth animations, and interactive elements.

## 🌟 Features

### Design & Animations
- **Glassmorphism UI**: Transparent, frosted-glass cards throughout
- **Dynamic Backgrounds**: Morphing themes (stars → galaxy → clouds → ocean)
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach

### Sections
1. **Hero Section**: Animated starfield, profile image, neon CTA buttons
2. **Experience Section**: Rain animation with glassmorphic timeline
3. **Leadership Section**: Achievement cards and certifications
4. **Projects Section**: Galaxy particles with project showcase
5. **Skills Section**: Glass door effect with badge collection wall
6. **Contact Section**: Ocean waves with interactive block-breaker game

### Interactive Elements
- **Block Breaker Game**: Hit the "Contact" block to open contact form
- **Resume Download**: Direct PDF download functionality
- **Smooth Scrolling**: Section-based navigation
- **Hover Effects**: Interactive glassmorphic elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your profile image:
   - Place your profile image as `public/profile.jpg`
   - Recommended: Square aspect ratio (400x400px or larger)

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Game**: Custom HTML5 Canvas block-breaker

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles & animations
│   └── components/
│       ├── sections/           # Page sections
│       │   ├── HeroSection.tsx
│       │   ├── ExperienceSection.tsx
│       │   ├── LeadershipSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── SkillsSection.tsx
│       │   └── ContactSection.tsx
│       ├── animations/
│       │   └── BackgroundEffects.tsx
│       └── games/
│           └── BlockBreakerGame.tsx
├── public/
│   ├── profile.jpg             # Your profile image
│   └── Final resume- aug.pdf   # Resume PDF
└── tailwind.config.ts          # Tailwind configuration
```

## 🎨 Customization

### Personal Information
All personal data is loaded from the components. Update the following:

- **Hero Section**: Name, role, tagline in `HeroSection.tsx`
- **Experience**: Job details in `ExperienceSection.tsx`
- **Projects**: Project information in `ProjectsSection.tsx`
- **Skills**: Technology lists in `SkillsSection.tsx`
- **Contact**: Contact information in `ContactSection.tsx`

### Styling
- **Colors**: Modify neon-green and glass colors in `tailwind.config.ts`
- **Animations**: Adjust timing and effects in component files
- **Backgrounds**: Customize gradients and particle effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎮 Interactive Features

### Block Breaker Game
- Use arrow keys or A/D to move paddle
- Mouse movement also controls paddle
- Hit the red "CONTACT" block to trigger contact modal
- Game physics include ball bouncing and collision detection

### Contact Form
- Integrated with mailto functionality
- Form validation included
- Responsive modal design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Prithika Sathish**
