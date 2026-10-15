module.exports = {
  apps: [
    {
      name: 'rental-demo',
      cwd: '/home/devata-vps/deovatta/projects/rental-demo',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3080',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3080,
      },
    },
  ],
};
