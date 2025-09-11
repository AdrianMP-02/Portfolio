# Mi Portfolio Personal

Un portfolio moderno y profesional con blog integrado, desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Portfolio Personal**: Página principal con presentación profesional
- **Sección Acerca de**: Información detallada sobre experiencia y habilidades
- **Proyectos**: Showcase de proyectos con enlaces a código y demos
- **Blog Integrado**: Sistema de blog con posts en Markdown
- **Página de Contacto**: Formulario de contacto y enlaces sociales
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- **Rendimiento**: Optimizaciones automáticas de Next.js

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Blog**: Markdown con gray-matter y next-mdx-remote
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
- **LinkedIn**: [Tu LinkedIn](https://linkedin.com/in/usuario)
- **GitHub**: [Tu GitHub](https://github.com/usuario)
- **Website**: [Tu Portfolio](https://tu-portfolio.com)

---

⭐ Si este proyecto te ayudó, ¡dale una estrella!
