// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'pantry-tracker-api',
            script: 'dist/main.js',
            instances: 'max',
            exec_mode: 'cluster',
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
            output: '/dev/null',
            error: '/dev/null',
            log: '/dev/null',
        },
    ],
};