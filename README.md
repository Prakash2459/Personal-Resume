# Personal Resume – Next.js

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

A modern, production-ready resume website built with Next.js, featuring a clean design, smooth animations, and optimized performance. The application is fully containerized and ready for deployment on any platform.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with beautiful glassmorphism effects
- **Performance Optimized**: Static generation, image optimization, and compression
- **Production Ready**: Docker containerization with multi-stage builds
- **Security**: Security headers, non-root container user, and health checks
- **Developer Experience**: Hot reload, TypeScript, ESLint, and comprehensive scripts

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd resume

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Docker Development

```bash
# Run with Docker Compose
docker-compose --profile dev up

# Or build and run manually
npm run docker:dev
```

## 📦 Production Deployment

### Using Docker (Recommended)

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or use npm scripts
npm run docker:build
npm run docker:run
```

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean build artifacts and cache |
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run Docker container |
| `npm run docker:dev` | Run development Docker container |

## 🏗️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/health/          # Health check endpoint
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main resume content
├── public/                      # Static assets
├── Dockerfile                   # Production container
├── Dockerfile.dev              # Development container
├── docker-compose.yml          # Container orchestration
├── next.config.ts              # Next.js configuration
└── DEPLOYMENT.md               # Detailed deployment guide
```

## 🎨 Customization

### Content
- **Personal Information**: Update `src/app/layout.tsx` for header/footer and metadata
- **Resume Sections**: Modify `src/app/page.tsx` for skills, projects, and experience
- **Styling**: Customize `src/app/globals.css` for colors, animations, and effects

### Configuration
- **Environment Variables**: Copy `env.example` to `.env.local` and customize
- **Next.js Settings**: Modify `next.config.ts` for build and runtime configuration
- **Docker Settings**: Adjust `Dockerfile` and `docker-compose.yml` as needed

## 🌐 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables can be set in Vercel dashboard

### Docker Platforms
- **Railway**: Deploy using Dockerfile
- **Render**: Deploy using Docker
- **DigitalOcean App Platform**: Deploy using Docker
- **AWS ECS/Fargate**: Deploy using Docker
- **Google Cloud Run**: Deploy using Docker

### Traditional VPS/Server
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔧 Production Features

- **Standalone Output**: Optimized for containerization
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Image Optimization**: WebP and AVIF format support with long-term caching
- **Health Monitoring**: `/api/health` endpoint for container health checks
- **Multi-stage Docker Build**: Minimized production image size
- **Non-root Container**: Enhanced security with dedicated user

## 📊 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with tree shaking and code splitting
- **Caching**: Aggressive caching for static assets

## 🔒 Security

- Security headers configured in Next.js
- Container runs as non-root user
- No sensitive data in environment variables
- Regular dependency updates recommended

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT © 2025 Jambula Venkata Jaya Prakash Reddy. See [LICENSE](./LICENSE) for details.

## 🙋‍♂️ Contact

- **Email**: [prakashprakash2459@gmail.com](mailto:prakashprakash2459@gmail.com)
- **Website**: [jayaprakash.space](https://www.jayaprakash.space)
- **GitHub**: [Prakash2459](https://github.com/Prakash2459)

---

⭐ Star this repository if you found it helpful!
