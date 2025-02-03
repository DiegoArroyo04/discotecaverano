
# Discoteca Verano

Proyecto de una página web para una discoteca de verano desarrollado en **React** con **TypeScript**.

## Instalación

### 1. Crear el proyecto con Vite
```sh
npm create vite@latest discotecaverano
```
Selecciona las opciones:
- **Framework:** React
- **Lenguaje:** TypeScript

### 2. Acceder al proyecto e instalar dependencias
```sh
cd discotecaverano
npm install
npm run dev
```

## Instalación de dependencias adicionales

Las siguientes librerías son necesarias para manejar rutas, efectos de scroll y otros aspectos del proyecto:

```sh
npm install react-router-dom          # Navegación entre páginas
npm install react-scroll              # Efectos de scroll
npm install --save-dev @types/react-scroll  # Tipos para TypeScript
npm install react-intersection-observer  # Detección de elementos en viewport
npm i @vercel/analytics             # Analíticas de Vercel
npm install react-icons             # Iconos para la interfaz
```

---

## Funcionalidades

### General
- [x] Fuentes personalizadas.
- [x] Paleta de colores combinada.
- [x] Logos en favicon, header y footer.
- [x] Información de contacto y redes sociales.
- [x] Despliegue en producción operativo.
- [x] Añadir estadísticas de Vercel.

### Preloader
- [x] Solo aparece cuando la sección principal ha cargado.
- [x] Uso del icono definitivo.

### Pop-up del próximo evento
- [x] Modal emergente al abrir la página.
- [x] Mejorar estilos del botón de cerrar.
- [x] Ajustar tamaño y textos del botón "Más información".
- [x] Optimización en móviles muy pequeños.

### Navegación
- [x] El logo redirige a la parte superior de la página.
- [x] Los enlaces navegan a sus secciones correspondientes.
- [x] Al hacer scroll, el background del header cambia y resalta los textos.
- [x] Al hacer hover, los enlaces se subrayan.
- [x] Menú hamburguesa responsive.
- [x] Al hacer clic en una sección, el menú hamburguesa se cierra automáticamente.

### Próximos eventos
- [x] Implementación de **Lazy Loading**.
- [x] Ajustes para móviles pequeños.
- [x] Centrado de eventos en tablets.

### Compra de entradas
- [x] Integración del sistema de compra de entradas.

### Patrocinadores
- [x] Implementación de **Lazy Loading**.
- [x] Corrección de sombreado en móviles.

### Banner de cookies
- [x] Aparece el banner de cookies al entrar.
- [x] Formato correcto del banner.
- [x] Al aceptar, la preferencia se almacena y no vuelve a mostrarse.
- [x] Implementación de cookies de ubicación.
- [x] Implementación de cookies de preferencias de idioma y color navegador.

### Header (Encabezado)
- [x] Video de fondo y textos destacados.
- [x] Mejora en sombras de los textos.

### Galería de imágenes
- [x] Contenedor para la galería.
- [x] Imágenes organizadas por año.
- [x] Previsualizador de imágenes.
- [x] Implementación de **Lazy Loading**.
- [x] Botón de "Volver" para navegación cómoda.

### Ubicación y contacto
- [x] Implementación de **Lazy Loading**.
- [x] Mapa interactivo.
- [x] Tarjetas con información de redes sociales.

### Footer (Pie de página)
- [x] Logo de la discoteca.
- [x] Enlaces a redes sociales.
- [x] Información de contacto (Email, teléfono, dirección).
- [x] Enlaces a textos legales.

### Textos legales
- [x] Página de privacidad.
- [x] Aviso legal.
- [x] Información sobre cookies.
- [x] Mejora de estilos CSS para mejor legibilidad.





