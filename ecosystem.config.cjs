module.exports = {
  apps: [
    {
      name: 'saint-app',
      cwd: '/home/developer/saint_app',
      script: './node_modules/.bin/serve',
      args: '-s dist -l tcp://127.0.0.1:3000 --no-port-switching',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
