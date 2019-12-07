module.exports = {
  apps : [{
    name: 'api',
    script: 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'akashi',
      host : '120.79.180.233',
      port : '39999',
      ref  : 'origin/master',
      repo : 'git@github.com:YatomigaAkashi/student.git',
      path : 'www/api/student',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
