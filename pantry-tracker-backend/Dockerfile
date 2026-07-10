# ============================================
# STAGE 1: Build (compilar TypeScript)
# ============================================
FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Compilar TypeScript a JS
RUN pnpm build

# ============================================
# STAGE 2: Producción (solo lo necesario)
# ============================================
FROM node:24-alpine AS production 

WORKDIR /app

# Instalar PM2 globalmente
RUN npm install -g pm2

# Instalar solo dependencias de producción
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Copiar el código compilado y archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/ecosystem.config.js ./
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Generar Prisma Client en producción
RUN npx prisma generate

# Exponer el puerto de tu app (ajusta al que uses: 3000 o 8000)
EXPOSE 8000

# Usar PM2 en modo runtime
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]