# Route Mood Project

## Funcionalidad: Rutas para caminar en mapa interactivo según estado de ánimo.

### BASIC
- El usuario hace LOGIN y se registra.
- El usuario podrá elegir su estado de ánimo para empezar con la ruta.
- Hay 5 estados de ánimo: Nostálgico, Friki, ...
- Las rutas se mostrarán en mapa interactivo con Leaflet. Aparecerá Tiempo aproximado, descripción y sitios.
    - Marcará los puntos de interés y si se hace click se abre modal con el detalle del sitio (foto, descripción)
- Se pueden marcar como favoritas las rutas.
- El usuario dispondrá de su área con un perfil que podrá modificar (foto, datos personales) y rutas favoritas.

### PRO
- El usuario podrá valorar las rutas y/o comentarlas (estrellas). 
- Cada ruta llevará su banda sonora (API Spotify) player embed (adding a widget)
- El usuario podrá hacer login con Facebook (FB API dev)
- El usuario podrá proponer Rutas nuevas (previa aceptación Admin)


### TASKS
- 1a Fase: Realizar maquetación (SASS)
- 2a Fase: Realizar Mapas (Leaflet, React)
- 3a Fase: Realizar demás funcionalidades

### PAGINA Y COMPONENTES
- Components:
    - App
    - Header
    - Footer
    - Maps
        -MapItem
    - Routes
        -RouteItem
    - PersonalData
    - FavRoutes

- Pages:
    - Home (introduction)
    - Login & Register
    - RouteSelected
    - SelectMood
    - User

npm link (componente que quiero usar)
npm link (nombre package.json ej button )