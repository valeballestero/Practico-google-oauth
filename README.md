# NestJS Google OAuth2 Authentication API

API REST desarrollada con **NestJS**, **Prisma ORM** y **Passport** para autenticación mediante **Google OAuth2** y gestión de sesiones con **JSON Web Tokens (JWT)**.

---

## Tecnologías utilizadas

- **Framework:** NestJS (Node.js & TypeScript)
- **Base de Datos:** PostgreSQL (Neon.tech)
- **ORM:** Prisma
- **Autenticación:** Passport.js (`passport-google-oauth20`)
- **Seguridad:** `@nestjs/jwt`

---

## Instalación y Configuración

### 1. Clonar el repositorio e instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo `.env.example` para crear tu `.env` local:

```bash
cp .env.example .env
```

Completar las credenciales en `.env` con tus datos de **Google Cloud Console** y la cadena de conexión de **Prisma**:

```env
DATABASE_URL="postgresql://usuario:password@servidor.neon.tech/neondb?sslmode=require"
GOOGLE_CLIENT_ID="tu_client_id"
GOOGLE_CLIENT_SECRET="tu_client_secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/auth/google/redirect"
JWT_SECRET="tu_jwt_secret"
```

### 3. Sincronizar la base de datos con Prisma

```bash
npx prisma db push
```

---

## Ejecución del Servidor

```bash
# Modo desarrollo
npm run start:dev
```

El servidor iniciará en: `http://localhost:3000`

---

## Endpoints Principales

| Método | Ruta | Descripción |
| `GET` | `/auth/google` | Inicia el flujo de autenticación con Google |
| `GET` | `/auth/google/redirect` | Callback de Google que procesa al usuario y retorna el **JWT** |
