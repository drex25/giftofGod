# Gift Of God - Frontend Multilingual

Un frontend moderno y profesional para el sistema de hostal "Gift Of God" con soporte completo para múltiples idiomas (Inglés y Francés).

## 🌟 Características Principales

### 🎨 Diseño Profesional
- **Paleta de colores cálida y profesional**: Naranja, azul, púrpura y tonos tierra
- **Interfaz moderna**: Gradientes, sombras elegantes, animaciones suaves
- **Responsive design**: Optimizado para todos los dispositivos
- **Componentes reutilizables**: Sistema de diseño consistente

### 🌍 Sistema Multilingüe Completo
- **Inglés (idioma principal)**: Traducciones completas
- **Francés**: Traducciones completas
- **Selector de idioma elegante**: Con banderas y nombres nativos
- **Detección automática**: Basada en navegador y localStorage
- **Interpolación dinámica**: Soporte para variables en traducciones

### 🏠 Páginas Principales
- **Home**: Hero section, búsqueda, amenidades, tipos de habitaciones, testimonios
- **Rooms**: Lista de habitaciones con filtros avanzados
- **Room Detail**: Detalles completos de habitaciones
- **Auth**: Login y registro con validaciones
- **Dashboard**: Panel de usuario y administrador

### 🔧 Componentes UI
- **Navbar**: Navegación responsive con selector de idioma
- **Footer**: Información completa con enlaces y contacto
- **SearchForm**: Formulario de búsqueda inteligente
- **RoomCard**: Tarjetas de habitaciones elegantes
- **LanguageSelector**: Selector de idioma profesional

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Router** para navegación
- **React i18next** para internacionalización
- **Lucide React** para iconos
- **Context API** para estado global

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Construir para producción
npm run build
```

## 🌍 Sistema de Internacionalización

### Estructura de Archivos
```
src/i18n/
├── index.ts          # Configuración principal
└── locales/
    ├── en.json       # Traducciones en inglés
    └── fr.json       # Traducciones en francés
```

### Uso en Componentes
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.description')}</p>
    </div>
  );
};
```

### Agregar Nuevos Idiomas
1. Crear archivo de traducciones en `src/i18n/locales/`
2. Agregar al array de idiomas en `LanguageSelector.tsx`
3. Importar en `src/i18n/index.ts`

## 🎨 Paleta de Colores

### Colores Principales
- **Primary**: `#f97316` (Naranja cálido)
- **Secondary**: `#3b82f6` (Azul profesional)
- **Tertiary**: `#8b5cf6` (Púrpura elegante)

### Colores de Tierra
- **Earth-50**: `#fafaf9`
- **Earth-100**: `#f5f5f4`
- **Earth-500**: `#78716c`
- **Earth-700**: `#44403c`
- **Earth-800**: `#292524`
- **Earth-900**: `#1c1917`

### Colores Cálidos
- **Warm-50**: `#fffbeb`
- **Warm-100**: `#fef3c7`
- **Warm-500**: `#f59e0b`
- **Warm-700**: `#b45309`

## 📱 Componentes Principales

### LanguageSelector
Selector de idioma elegante con:
- Banderas de países
- Nombres nativos
- Animaciones suaves
- Detección automática

### Navbar
Navegación responsive con:
- Logo animado
- Menú hamburguesa
- Selector de idioma
- Estados de autenticación

### SearchForm
Formulario de búsqueda con:
- Campos de ubicación, fechas, huéspedes
- Validación en tiempo real
- Diseño responsive
- Integración con traducciones

### RoomCard
Tarjetas de habitaciones con:
- Imágenes con overlay
- Información detallada
- Amenidades con iconos
- Botones de acción

## 🔄 Flujo de Datos

### Estado Global
- **AuthContext**: Manejo de autenticación
- **i18n**: Configuración de idiomas
- **React Router**: Navegación

### API Integration
- Servicios modulares para cada entidad
- Manejo de errores centralizado
- Interceptores para tokens

## 📊 Estructura de Traducciones

### Organización
```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error"
  },
  "navigation": {
    "home": "Home",
    "rooms": "Rooms"
  },
  "home": {
    "hero": {
      "title": "Gift Of God",
      "description": "Discover comfort..."
    }
  }
}
```

### Características
- **Interpolación**: `{{variable}}`
- **Pluralización**: `count_plural`
- **Anidación**: Estructura jerárquica
- **Fallbacks**: Idioma por defecto

## 🎯 Funcionalidades Destacadas

### Búsqueda Inteligente
- Filtros por tipo de habitación
- Rango de precios
- Capacidad de huéspedes
- Búsqueda por ubicación

### Sistema de Reservas
- Selección de fechas
- Cálculo de precios
- Validación de disponibilidad
- Confirmación de reserva

### Panel de Usuario
- Historial de reservas
- Perfil personalizable
- Preferencias de idioma
- Notificaciones

## 🚀 Despliegue

### Variables de Entorno
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENVIRONMENT=development
```

### Scripts Disponibles
```bash
npm start          # Desarrollo
npm run build      # Producción
npm run test       # Tests
npm run eject      # Eject (no recomendado)
```

## 📈 Próximas Mejoras

- [ ] Agregar más idiomas (Español, Alemán)
- [ ] Implementar PWA
- [ ] Optimización de imágenes
- [ ] Tests unitarios completos
- [ ] Integración con analytics
- [ ] Modo oscuro

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Desarrollador**: Gift Of God Team
- **Email**: info@giftofgod.com
- **Proyecto**: [https://github.com/giftofgod/frontend](https://github.com/giftofgod/frontend)

---

**Gift Of God** - Donde cada huésped es tratado como familia. 🌟
