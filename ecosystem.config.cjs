/**
 * PM2 process file for yousuf-website
 * Usage:
 *   npm run build
 *   pm2 start ecosystem.config.cjs
 *   # or: npm run pm2:start
 */
module.exports = {
  apps: [
    {
      name: "yousuf-website",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5001",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 5001,
      },
    },
  ],
};
