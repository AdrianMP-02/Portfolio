---
title: "Cómo crear un Portfolio con Next.js y Tailwind CSS"
date: "2025-01-08"
excerpt: "Tutorial completo para crear un portfolio personal moderno usando Next.js, TypeScript y Tailwind CSS desde cero."
tags: ["nextjs", "tutorial", "tailwind", "portfolio"]
---

# Cómo crear un Portfolio con Next.js y Tailwind CSS

En este tutorial te mostraré cómo crear un portfolio personal moderno y responsivo usando Next.js, TypeScript y Tailwind CSS. Es el mismo stack que utilicé para crear este sitio web.

## ¿Por qué esta combinación de tecnologías?

### Next.js
- **Rendimiento excepcional**: Server-side rendering y optimizaciones automáticas
- **SEO friendly**: Mejor indexación en motores de búsqueda
- **Developer experience**: Hot reload, TypeScript integrado, y más

### TypeScript
- **Menos errores**: Detección de errores en tiempo de desarrollo
- **Mejor autocompletado**: IntelliSense mejorado en tu editor
- **Código más mantenible**: Tipos explicitos hacen el código más fácil de entender

### Tailwind CSS
- **Desarrollo rápido**: Clases utilitarias predefinidas
- **Diseño consistente**: Sistema de diseño coherente
- **Altamente personalizable**: Fácil de adaptar a tu marca personal

## Configuración inicial

Primero, creamos el proyecto base:

```bash
npx create-next-app@latest mi-portfolio --typescript --tailwind --eslint --app
cd mi-portfolio
```

## Estructura del proyecto

Organiza tu proyecto de esta manera:

```
src/
  app/
    page.tsx          # Página principal
    about/
      page.tsx        # Página "Acerca de"
    projects/
      page.tsx        # Página de proyectos
    blog/
      page.tsx        # Lista de blog posts
      [slug]/
        page.tsx      # Post individual
    contact/
      page.tsx        # Página de contacto
  components/
    Navbar.tsx        # Navegación
    Footer.tsx        # Pie de página
  lib/
    blog.ts          # Utilidades para el blog
```

## Creando el layout principal

El layout es la estructura base que envuelve todas las páginas:

```tsx
// src/app/layout.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

## Componente de navegación

Una navegación limpia y responsiva:

```tsx
// src/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center font-bold text-xl">
            Mi Portfolio
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              Acerca de
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600">
              Proyectos
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
```

## Sistema de blog con Markdown

Para el blog, utilizamos archivos Markdown que se procesan dinámicamente:

```bash
npm install gray-matter next-mdx-remote
```

```tsx
// src/lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        tags: data.tags || []
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
```

## Consejos de optimización

### 1. Imágenes optimizadas
Usa el componente `Image` de Next.js para optimización automática:

```tsx
import Image from 'next/image'

<Image
  src="/mi-foto.jpg"
  alt="Mi foto"
  width={300}
  height={300}
  className="rounded-full"
/>
```

### 2. Metadatos para SEO
Agrega metadatos en cada página:

```tsx
export const metadata = {
  title: 'Mi Portfolio - Desarrollador Full Stack',
  description: 'Portfolio personal de [tu nombre], desarrollador especializado en React y Next.js'
}
```

### 3. Performance
- Usa `loading="lazy"` en imágenes no críticas
- Implementa code splitting con `dynamic` imports
- Optimiza fuentes con `next/font`

## Despliegue

El despliegue más sencillo es con Vercel:

```bash
npm run build
npx vercel --prod
```

## Conclusión

Con esta configuración tienes una base sólida para tu portfolio personal. El resultado es:

- ✅ Rápido y optimizado para SEO
- ✅ Totalmente responsivo
- ✅ Sistema de blog integrado
- ✅ Fácil de mantener y actualizar

En el próximo post veremos cómo agregar animaciones y micro-interacciones para hacer el portfolio aún más atractivo.

¿Te gustó este tutorial? ¡Déjame saber en los comentarios si tienes alguna pregunta!
