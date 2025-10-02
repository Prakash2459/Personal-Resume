# Deployment Guide

This guide covers how to deploy the resume application in production using Docker.

## Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- Git (for version control)

## Production Deployment

### Option 1: Using Docker Compose (Recommended)

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd resume
   ```

2. **Build and run the production container:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`

### Option 2: Using Docker directly

1. **Build the Docker image:**
   ```bash
   docker build -t resume-app .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 --name resume-app resume-app
   ```

### Option 3: Using npm scripts

1. **Build the production image:**
   ```bash
   npm run docker:build
   ```

2. **Run the container:**
   ```bash
   npm run docker:run
   ```

## Development Setup

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Open `http://localhost:3000`

### Development with Docker

1. **Run development container:**
   ```bash
   docker-compose --profile dev up
   ```

   Or using npm script:
   ```bash
   npm run docker:dev
   ```

## Environment Variables

Copy `env.example` to `.env.local` for local development or `.env` for production:

```bash
cp env.example .env.local
```

Key environment variables:
- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Port number (default: 3000)
- `NEXT_TELEMETRY_DISABLED`: Disable Next.js telemetry (set to 1)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts and cache
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:dev` - Run development Docker container

## Production Optimizations

The application includes several production optimizations:

### Next.js Configuration
- **Standalone output**: Optimized for containerization
- **Compression**: Gzip compression enabled
- **Security headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Image optimization**: WebP and AVIF format support
- **Long-term caching**: 1-year cache for images

### Docker Optimizations
- **Multi-stage build**: Reduces final image size
- **Non-root user**: Enhanced security
- **Health checks**: Container health monitoring
- **Layer caching**: Optimized for faster rebuilds

### Performance Features
- **Static generation**: Pages are pre-rendered at build time
- **Font optimization**: Google Fonts are optimized
- **CSS optimization**: Tailwind CSS is purged and optimized
- **Bundle analysis**: Use `npm run analyze` to analyze bundle size

## Deployment Platforms

### Vercel (Recommended for Next.js)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables can be set in Vercel dashboard

### Docker-based Platforms
- **Railway**: Deploy using Dockerfile
- **Render**: Deploy using Docker
- **DigitalOcean App Platform**: Deploy using Docker
- **AWS ECS/Fargate**: Deploy using Docker
- **Google Cloud Run**: Deploy using Docker

### Traditional VPS/Server
1. Install Docker and Docker Compose
2. Clone repository
3. Run `docker-compose up -d`
4. Set up reverse proxy (Nginx/Apache) if needed
5. Configure SSL certificate (Let's Encrypt recommended)

## Health Monitoring

The application includes a health check endpoint at `/api/health` that returns:
- Application status
- Uptime
- Environment information
- Timestamp

## Troubleshooting

### Build Issues
- Ensure Node.js version is 18+
- Clear cache: `npm run clean`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Docker Issues
- Check Docker daemon is running
- Ensure ports are not in use: `lsof -i :3000`
- Check container logs: `docker logs resume-app`

### Performance Issues
- Analyze bundle size: `npm run analyze`
- Check network requests in browser dev tools
- Monitor memory usage in production

## Security Considerations

- Security headers are configured in `next.config.ts`
- Container runs as non-root user
- No sensitive data in environment variables
- Regular dependency updates recommended

## Monitoring and Logging

For production deployments, consider:
- Application monitoring (e.g., Sentry, DataDog)
- Log aggregation (e.g., ELK stack, Splunk)
- Performance monitoring (e.g., New Relic, AppDynamics)
- Uptime monitoring (e.g., Pingdom, UptimeRobot)
