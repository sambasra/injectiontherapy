module.exports = {
  apps: [
    {
      name: 'injectiontherapy',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      cwd: '/home/user/injectiontherapy',
      env: {
        NODE_ENV: 'production',
      },
      restart_delay: 3000,
      max_restarts: 5,
      watch: false,
    },
  ],
}
