module.exports = {
    apps: [
        {
            name: 'pantry-tracker-api',      // El nombre que verás en la consola
            script: './dist/main.js',        // ¡Tu punto de entrada compilado en JavaScript!
            instances: 'max',                // 🚀 ¡Modo Cluster! Usa todos los núcleos de tu CPU
            exec_mode: 'cluster',            // Balancea la carga entre los núcleos automáticamente
            watch: false,                    // En producción no queremos que se reinicie por cambios de archivos
            max_memory_restart: '1G',        // Si hay una fuga de memoria y pasa de 1GB, se reinicia solo
            env: {
                NODE_ENV: 'production',        // Variables de entorno por defecto
            }
        }
    ]
};