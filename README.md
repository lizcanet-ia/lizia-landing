# Lizia — Landing Page

Sitio web de Lizia, asistente virtual de atención al cliente por WhatsApp.

## Estructura del proyecto

```
├── index.html              ← Entrada principal
├── lizia-styles.css        ← Estilos globales
├── lizia-nav.jsx           ← Navegación
├── lizia-hero.jsx          ← Hero + logo cloud
├── lizia-sections-1.jsx    ← Problema + Diagnóstico
├── lizia-sections-2.jsx    ← Solución + Casos + Proceso
├── lizia-sections-3.jsx    ← CRM + FAQ + CTA + Footer
├── lizia-app.jsx           ← Componente raíz (App)
├── uploads/                ← Imágenes y video
├── _headers                ← Headers de Cloudflare Pages
├── _redirects              ← Redirects de Cloudflare Pages
├── package.json            ← Metadata del proyecto
└── .gitignore
```

## Deploy en Cloudflare Pages (via GitHub)

### 1. Crear el repositorio en GitHub

```bash
git init
git add .
git commit -m "Initial commit — Lizia landing page"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/lizia-landing.git
git push -u origin main
```

### 2. Conectar con Cloudflare Pages

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Seleccionar la pestaña **Pages** → **Connect to Git**
3. Autorizar GitHub y seleccionar el repositorio `lizia-landing`
4. Configurar el build:

| Campo                    | Valor    |
|--------------------------|----------|
| **Production branch**    | `main`   |
| **Build command**        | *(vacío — dejar en blanco)* |
| **Build output directory** | `/`    |

5. Click en **Save and Deploy**

### 3. Dominio personalizado (opcional)

1. En Cloudflare Pages → tu proyecto → **Custom domains**
2. Agregar tu dominio (ej: `lizia.com.ar`)
3. Si el dominio ya está en Cloudflare, el DNS se configura automáticamente
4. Si no, agregar el registro CNAME que Cloudflare indica

### Desarrollo local

```bash
# Servir localmente
npx serve . -p 3000

# Abrir en el navegador
open http://localhost:3000
```

### Notas técnicas

- El sitio es **100% estático** (no requiere build step)
- Usa React 18 + Babel standalone para transpilación JSX en el navegador
- Los archivos `_headers` y `_redirects` son procesados automáticamente por Cloudflare Pages
- Las imágenes y el video están en `/uploads/`
