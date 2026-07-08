
#  Pantry Tracker API

**Pantry Tracker API** es una solución robusta de backend para la gestión inteligente del inventario de alimentos. Esta API ayuda a los usuarios a realizar un seguimiento de los productos de su despensa, gestionar fechas de vencimiento con clasificación automática de frescura, organizar unidades y categorías, y optimizar el consumo de alimentos.

---


#  Características Clave

*   **Autenticación Segura con Hilos de Trabajo**: Las contraseñas se gestionan de forma asíncrona mediante un pool de hilos de trabajo gestionado con **Piscina**, descargando las operaciones pesadas de hashing (Argon2/Bcrypt) fuera del hilo principal de Node.js.

*   **Límites de Peticiones Centralizados (Rate Limiting)**: Implementación de un limitador de peticiones respaldado por **Redis** (`express-rate-limit` + `rate-limit-redis`). Esto garantiza que los límites se apliquen correctamente a nivel global incluso al escalar la aplicación en múltiples instancias con PM2 en modo Cluster.

*   **Caché Avanzado**: Integración de caché en endpoints clave para mejorar significativamente los tiempos de respuesta utilizando **Redis**.

*   **Reglas de Vencimiento Inteligentes**: Clasificación automatizada del estado de frescura de los alimentos (`EXPIRED`, `CRITICAL`, `FRESH`, etc.) basada en zonas horarias UTC unificadas.

*   **Arquitectura Limpia**: Estructurado mediante el patrón Repositorio y Capa de Servicios para un código desacoplado y mantenible.

---


##  Stack Tecnológico

*   **Runtime & Lenguaje**: Node.js & TypeScript
*   **Framework Web**: Express
*   **Base de Datos (ORM)**: Prisma (conectado a Microsoft SQL Server)
*   **Almacén de Datos en Memoria**: Redis (Caché y Rate Limiting)
*   **Gestor de Procesos en Producción**: PM2 (modo Cluster)
*   **Pruebas Unitarias**: Vitest (usando Fake Timers para consistencia en fechas)
*   **Multiprocesamiento**: Piscina (Worker Threads)
*   **Herramientas de Rendimiento**: Autocannon (stress test) y ClinicJS (profiling)
*   **Herramientas de Seed**: Faker.js para la generacion de datos

---


##  Configuración del Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:

```env
# Puerto del Servidor
PORT=8000

# Base de datos SQL Server
DATABASE_URL="sqlserver://localhost:1433;database=pantrytracker;user=sa;password=TuPasswordSeguro;encrypt=true;trustServerCertificate=true;connection_limit=14"
SA_PASSWORD="TuPasswordSeguro"

# Secreto para JWT
JWT_SECRET="TuClaveSecretaJWT"

# Configuración del correo electrónico (Notificaciones)
EMAIL_ADDRESS="tu-correo@gmail.com"
EMAIL_PASSWORD="tu-contraseña-aplicacion"

# Conexión a Redis
REDIS_URL="redis://localhost:6379"
```

###  Levantar Servicios en Docker
Si usas contenedores de Docker para las bases de datos locales, asegúrate de levantar SQL Server y Redis:
```bash
# Iniciar contenedores existentes
docker start pantry-redis sqlserver
```



##  Pruebas Unitarias y de Integración

El proyecto utiliza **Vitest** para garantizar la fiabilidad de las reglas de negocio y algoritmos de expiración. Congelamos la hora del sistema en las pruebas con Fake Timers para evitar inconsistencias de zona horaria.

```bash
# Ejecutar suite de pruebas una vez
pnpm test

# Ejecutar pruebas en modo interactivo UI
pnpm exec vitest --ui
```

---


##  Scripts Disponibles (`package.json`)

En el proyecto puedes ejecutar los siguientes scripts utilizando `pnpm`:

### Desarrollo y Compilación
*   `pnpm run dev`: Inicia el servidor de desarrollo utilizando `tsx` para compilar y recargar en tiempo real ante cualquier cambio en `src/`.

*   `pnpm run build`: Compila todo el código de TypeScript a JavaScript de producción, guardando el resultado en la carpeta `dist/`.

### Producción y Despliegue (con PM2)
*   `pnpm run start`: Inicia la aplicación en producción de manera sencilla ejecutando directamente el código compilado (`node dist/main.js`).

*   `pnpm run prod:start`: Ejecuta `pnpm build` para asegurar la compilación más reciente y luego levanta la aplicación con **PM2** usando la configuración descrita en `ecosystem.config.js`. Inicia la API en **modo Cluster**, utilizando todos los núcleos del procesador.

*   `pnpm run prod:status`: Muestra el estado de salud, uso de CPU y memoria de todas las instancias activas de la API administradas por PM2.

*   `pnpm run prod:stop`: Detiene y elimina el proceso de PM2 `pantry-tracker-api`.

### Pruebas y Benchmarking
*   `pnpm run test`: Ejecuta todas las pruebas unitarias y de integración del proyecto con Vitest.
*   `pnpm run fake-seed`: Genera una gran cantidad de datos aleatorios o masivos en la base de datos (stress-seed) para realizar pruebas de carga.
*   `pnpm run benchmark`: Ejecuta un stress test automatizado de la API utilizando **Autocannon** para medir la latencia y peticiones por segundo.
*   `pnpm run profile`: Levanta la aplicación compilada con **ClinicJS Doctor** para monitorizar el rendimiento, uso de CPU, retraso del bucle de eventos y detectar posibles fugas de memoria.