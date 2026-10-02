# Deployment

## Recommended stack

- Frontend: Vercel / Nginx
- Backend: Docker + VPS / Render
- Database: PostgreSQL managed
- Cache: Redis
- Monitoring: Sentry / Logs

## Production flow

1. Build backend container
2. Build frontend build
3. Run database migrations
4. Run workers and scheduler
5. Configure environment variables
6. Set up SSL and reverse proxy
