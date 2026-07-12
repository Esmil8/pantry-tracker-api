# frontend/Dockerfile
# ============================================
# STAGE 1: Build (compilar la app)
# ============================================
FROM node:24-slim AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la app (genera carpeta /dist)
RUN npm run build

# ============================================
# STAGE 2: Servir con Nginx
# ============================================
FROM nginx:alpine

# Copiar los archivos estáticos compilados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 (Nginx por defecto)
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
