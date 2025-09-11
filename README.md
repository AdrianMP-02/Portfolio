# Mi Portfolio Personal

Un portfolio moderno y profesional con blog integrado, desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye sistema de contacto avanzado con EmailJS y funcionalidades de seguridad robustas.

## 🚀 Características

- **Portfolio Personal**: Página principal con presentación profesional
- **Sección Acerca de**: Información detallada sobre experiencia y habilidades
- **Proyectos**: Portfolio con proyectos reales y características de seguridad
- **Blog Integrado**: Sistema de blog con posts en Markdown
- **Formulario de Contacto Avanzado**: EmailJS con auto-reply y sistema anti-spam
- **Sistema de Seguridad**: Headers HTTP seguros, validaciones múltiples y protección anti-spam
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- **Rendimiento**: Optimizaciones automáticas de Next.js

## 🛡️ Funcionalidades de Seguridad

- **Sistema Anti-Spam Avanzado**: 
  - Honeypot field invisible para detectar bots
  - Rate limiting (1 envío cada 30 segundos)
  - Validación de tiempo mínimo (5 segundos)
  - Detección de contenido sospechoso con regex
  
- **EmailJS Profesional**:
  - Templates HTML responsive para emails
  - Sistema de auto-reply automático
  - Confirmación dual (para ti y para el remitente)
  - Manejo de errores robusto

- **Headers de Seguridad HTTP**:
  - Content Security Policy (CSP)
  - X-Frame-Options (protección clickjacking)
  - Strict-Transport-Security (HSTS)
  - X-XSS-Protection
  - Referrer-Policy

- **Validaciones Múltiples**:
  - Regex estricto para emails
  - Sanitización de entrada
  - Longitud mínima de mensajes
  - Prevención de caracteres peligrosos

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Blog**: Markdown con gray-matter y next-mdx-remote
- **Email**: EmailJS con templates profesionales
- **Seguridad**: Headers HTTP, validaciones, anti-spam
- **Iconos**: Lucide React
- **Linting**: ESLint
- **Deployment**: Optimizado para Vercel

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Páginas de la aplicación (App Router)
│   ├── about/             # Página "Acerca de"
│   ├── blog/              # Blog principal y posts individuales
│   ├── contact/           # Página de contacto
│   ├── projects/          # Página de proyectos
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── Footer.tsx         # Pie de página
│   └── Navbar.tsx         # Navegación principal
└── lib/                   # Utilidades
    └── blog.ts            # Funciones para manejar el blog

content/
└── blog/                  # Posts del blog en Markdown
    ├── bienvenido-al-blog.md
    └── tutorial-portfolio-nextjs.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Crea la build de producción
npm run start        # Inicia el servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## ✍️ Agregar Nuevos Posts al Blog

1. Crea un nuevo archivo `.md` en `content/blog/`
2. Agrega el frontmatter al inicio del archivo:

```markdown
---
title: "Título del Post"
date: "2025-01-09"
excerpt: "Breve descripción del post"
tags: ["tag1", "tag2", "tag3"]
---

# Contenido del post en Markdown

Tu contenido aquí...
```

3. El post aparecerá automáticamente en el blog.

## 🎨 Personalización

### Colores y Temas
Edita `tailwind.config.js` para personalizar los colores y temas.

### Contenido Personal
- Actualiza la información en `src/app/page.tsx` (página principal)
- Modifica `src/app/about/page.tsx` con tu información personal
- Agrega tus proyectos en `src/app/projects/page.tsx`
- Actualiza los enlaces sociales en `src/components/Footer.tsx`

### Metadatos y SEO
Actualiza los metadatos en cada página y en `src/app/layout.tsx`.

## 📦 Deploy en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio a [Vercel](https://vercel.com)
3. Configura las variables de entorno si es necesario
4. ¡Deploy automático!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: adrian.m.p.02022002@gmail.com
- **LinkedIn**: [linkedin.com/in/adrián-martín-pereira-167813222](https://linkedin.com/in/adrián-martín-pereira-167813222)
- **GitHub**: [github.com/AdrianMP-02](https://github.com/AdrianMP-02)
- **Website**: Portfolio personal profesional

---

⭐ Si este proyecto te ayudó, ¡dale una estrella!
