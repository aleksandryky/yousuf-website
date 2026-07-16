/**
 * PM2 process file for yousuf-website
 * Usage:
 *   npm run build
 *   pm2 start ecosystem.config.cjs
 *   # or: npm run pm2:start
 *
 * Set SITE_URL=https://your-domain.com for HSTS + correct Open Graph URLs.
 */
module.exports = {
  apps: [
    {
      name: "yousuf-website",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5002",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 5002,
        NEXT_TELEMETRY_DISABLED: "1",
        // Override in production, e.g. SITE_URL=https://yousufali.dev
        SITE_URL: process.env.SITE_URL || "http://localhost:5002",
      },
    },
  ],
};
