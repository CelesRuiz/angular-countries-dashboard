## 🚀 Demo
[Ver demo en vivo](https://angular-countries-dashboard-pdkb.vercel.app)

🌍 Country Search Dashboard - Angular 21
Este es un panel interactivo profesional que consume datos de la REST Countries API, construido con las últimas funcionalidades de Angular.

🌟 Lógica de Filtrado y Reactividad
El proyecto utiliza una arquitectura reactiva basada en Signals y Reactive Forms:

Gestión de Estados: Utilizo signal para manejar la lista de países y los resultados filtrados, optimizando el rendimiento con la estrategia OnPush.

Procesamiento de Datos: Implementé una lógica para extraer regiones únicas dinámicamente usando Set, evitando duplicados en el selector.

Filtro Combinado (applyFilters): Centralicé la lógica de búsqueda en un solo método que se dispara cada vez que el buscador o el selector cambian. Gracias a una validación booleana inteligente (!region || pais.region === region), ambos filtros conviven en armonía sin anularse.

🚀 Funcionalidades Clave
Filtrado Dual Inteligente: Integración fluida entre búsqueda por texto y categoría.

Reactividad Moderna: Gestión de estado mediante Signals (sin necesidad de observables complejos para esta lógica).

Arquitectura Angular 21: Uso de componentes Standalone y las sintaxis más recientes del framework.

Interfaz de Usuario: Pulida con Angular Material (mat-card, mat-select, mat-input) y un layout totalmente responsivo.

🛠️ Tecnologías
Framework: Angular 21

Lenguaje: TypeScript (Interfaces para modelos de datos de países)

Estilos & UI: Angular Material + Flexbox/Grid

API: Rest Countries

URL: https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags

⚙️ Instrucciones rápidas
npm install

ng serve

Abrir localhost:4200


