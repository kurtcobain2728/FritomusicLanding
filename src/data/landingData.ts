import { ShowcaseSlide, FeatureCardItem, SpecItem, FaqItem, StatItem } from '../types/landing';

export const HERO_STATS: StatItem[] = [
  { value: 'Streaming Libre', label: 'Música en la nube sin anuncios' },
  { value: 'Audio HQ 320k', label: 'Streaming OPUS y descargas 320 kbps' },
  { value: 'Letras en Vivo', label: 'Sincronizadas con traducción' },
  { value: '100% Gratuito', label: 'Sin suscripciones ni límites' },
];

export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 0,
    tabLabel: '01 · Inicio',
    screenTitle: 'Inicio y Música Local',
    badge: 'Biblioteca Local',
    title: 'Pantalla de Inicio & Biblioteca Desconectada',
    subtitle: 'Música local o descargada desde la misma app',
    description:
      'Tu centro de reproducción sin depender de internet. Esta vista indexa y organiza automáticamente todos los archivos de audio almacenados en tu teléfono o tarjeta MicroSD, junto con los temas y álbumes que descargues desde FritoMusic. Permite acceso directo a canciones reproducidas recientemente, tus favoritos marcados, filtrado por carpetas físicas y reproducción de bajo consumo sin cortes.',
    screenshotUrl: '/screenshots/01.jpg',
  },
  {
    id: 1,
    tabLabel: '02 · Stream',
    screenTitle: 'Explorador Streaming',
    badge: 'Streaming en la Nube',
    title: 'Explorador de Streaming en la Nube',
    subtitle: 'Música en streaming iniciando sesión con tu cuenta y escuchar a tus artistas',
    description:
      'Música en streaming iniciando sesión con tu cuenta y escuchar a tus artistas favoritos, álbumes recomendados y listas de éxitos con audio optimizado en OPUS y AAC. La vista cuenta con secciones dinámicas de descubrimiento, reproducción en segundo plano sin publicidad, listas de tendencias actualizadas a diario y sincronización de tus canciones favoritas y artistas seguidos.',
    screenshotUrl: '/screenshots/02.jpg',
  },
  {
    id: 2,
    tabLabel: '03 · Perfil de Artistas',
    screenTitle: 'Perfil de Artistas',
    badge: 'Discografía Completa',
    title: 'Perfil Detallado y Discografía del Artista',
    subtitle: 'Donde ves sus canciones y álbumes, etc.',
    description:
      'Perfil de artistas donde ves sus canciones y álbumes, etc. Al entrar al perfil de cualquier artista encontrarás su catálogo completo ordenado cronológicamente: canciones más populares, álbumes oficiales, EPs, sencillos y lanzamientos recientes. Puedes suscribirte al artista para seguir sus novedades, reproducir su discografía en modo aleatorio o descargar álbumes completos al instante.',
    screenshotUrl: '/screenshots/03.jpg',
  },
  {
    id: 3,
    tabLabel: '04 · Descargas',
    screenTitle: 'Gestor de Descargas',
    badge: 'Descargas Masivas',
    title: 'Gestor de Descargas Masivas e Individuales',
    subtitle: 'Descargar álbumes completos o también canciones individuales',
    description:
      'Descargar álbumes completos o también canciones individuales en alta calidad (hasta 320 kbps y 160 kbps). El motor multihilo respaldado por WorkManager opera en segundo plano sin interrumpir lo que estás escuchando, incrustando automáticamente carátulas en alta definición y etiquetas ID3. Puedes elegir almacenar en la memoria interna o directamente en tu tarjeta MicroSD externa.',
    screenshotUrl: '/screenshots/04.jpg',
  },
  {
    id: 4,
    tabLabel: '05 · Recap',
    screenTitle: 'Frito Recap',
    badge: 'Tus Estadísticas',
    title: 'Frito Recap: Tus Hábitos y Estadísticas de Escucha',
    subtitle: 'Métricas interactivas de tu experiencia musical',
    description:
      'Recap: Un desglose estadístico interactivo que analiza tus hábitos de escucha a lo largo de las semanas y del año. Descubre cuáles son tus artistas más escuchados, tus canciones más repetidas, géneros dominantes y el total de minutos que has disfrutado reproduciendo música. Incluye tarjetas de resumen visual preparadas para capturar y compartir con tus amigos.',
    screenshotUrl: '/screenshots/05.jpg',
  },
  {
    id: 5,
    tabLabel: '06 · Crossfade',
    screenTitle: 'Ajustes de Crossfade',
    badge: 'Transición Suave',
    title: 'Ajustes de Crossfade y Transición Continua',
    subtitle: 'Fundido cruzado entre canciones sin silencios',
    description:
      'Crossfade: Transición continua y suave entre canciones sin silencios ni cortes bruscos. Esta pantalla te permite calibrar con precisión milimétrica la duración del fundido cruzado (de 1 a 12 segundos) para que el final de una canción se entrelace armónicamente con el inicio de la siguiente, creando una sesión fluida e ininterrumpida ideal para fiestas o entrenamientos.',
    screenshotUrl: '/screenshots/06.jpg',
  },
  {
    id: 6,
    tabLabel: '07 · Migrar Playlist',
    screenTitle: 'Migrador de Playlists',
    badge: 'Migración Universal',
    title: 'Migrador Universal de Listas de Reproducción',
    subtitle: 'Migrar playlist de otras apps de streaming a esta',
    description:
      'Migrar playlist de otras apps de streaming a esta. No pierdas tus listas creadas en otros servicios: simplemente copia y pega el enlace público de tu playlist y el motor de FritoMusic buscará, reconstruirá y guardará todas las canciones en tu biblioteca en cuestión de segundos, listas para reproducir en streaming o descargar para escuchar sin conexión.',
    screenshotUrl: '/screenshots/07.jpg',
  },
];

export const FEATURES: FeatureCardItem[] = [
  {
    id: 1,
    tag: 'Motor AndroidX Media3',
    telemetry: 'ACTIVO',
    title: 'Reproductor ExoPlayer 1.2.1 de Alta Fidelidad',
    description:
      'Motor de reproducción nativo con soporte directo para OPUS (~160 kbps), AAC (hasta 256 kbps para Bluetooth directo), MP3, WAV y OGG sin remuestreo forzado.',
    staggerClass: 'stagger-1',
  },
  {
    id: 2,
    tag: 'Streaming en la Nube',
    telemetry: 'ACTIVO',
    title: 'Streaming en la Nube sin Anuncios',
    description:
      'Explora millones de canciones en línea. Inicia sesión con tu cuenta para sincronizar tus listas de reproducción, "Me gusta" y artistas seguidos.',
    staggerClass: 'stagger-2',
  },
  {
    id: 3,
    tag: 'Descargas Rápidas & Batch',
    telemetry: 'ACTIVO',
    title: 'Descargador Multihilo con Soporte MicroSD',
    description:
      'Gestionado en segundo plano con WorkManager. Descarga canciones y álbumes completos en alta calidad hasta 320 kbps o 160 kbps con guardado en memoria interna o tarjeta MicroSD vía SAF.',
    staggerClass: 'stagger-3',
  },
  {
    id: 4,
    tag: 'Karaoke & Traducción',
    telemetry: 'ACTIVO',
    title: 'Letras Sincronizadas con Traducción',
    description:
      'Visualiza letras en tiempo real con efecto karaoke, resplandor difuso en el verso activo y traducción automática al español integrada para disfrutar cada estrofa.',
    staggerClass: 'stagger-4',
  },
  {
    id: 5,
    tag: 'Migración de Listas',
    telemetry: 'ACTIVO',
    title: 'Migrar Playlists Fácilmente',
    description:
      'Migrar playlist de otras apps de streaming a esta. Pega tus enlaces para reconstruir y guardar tus listas en tu biblioteca con un solo clic.',
    staggerClass: 'stagger-5',
  },
  {
    id: 6,
    tag: 'Estadísticas & Personalización',
    telemetry: 'ACTIVO',
    title: 'Frito Recap & Diseño Glassmorphism',
    description:
      'Conoce tus canciones y artistas más reproducidos con Frito Recap. Disfruta de una interfaz reactiva en Jetpack Compose con transiciones fluidas, crossfade y MiniPlayer flotante.',
    staggerClass: 'stagger-6',
  },
];

export const TECHNICAL_SPECS: SpecItem[] = [
  {
    label: 'Formatos de Audio y Códecs Soportados',
    value: 'OPUS (WebM hasta ~160kbps), AAC (M4A hasta 256kbps), MP3 (hasta 320kbps), WAV, OGG Vorbis (compatibilidad total para archivos de audio locales y streaming)',
    staggerClass: 'stagger-1',
  },
  {
    label: 'Arquitectura & Motor de la App',
    value: 'Kotlin nativo + Jetpack Compose (Material 3), AndroidX Media3 (ExoPlayer 1.2.1), WorkManager en background y Ktor Client',
    staggerClass: 'stagger-2',
  },
  {
    label: 'Soporte de Almacenamiento & Descargas',
    value: 'Almacenamiento interno y tarjetas MicroSD externas configurables mediante Storage Access Framework (SAF) con carátulas HD y metadatos ID3 automáticos',
    staggerClass: 'stagger-3',
  },
  {
    label: 'Compatibilidad del Sistema Operativo',
    value: 'Android 8.0 Oreo (API 26) hasta Android 14 / 15 (API 34/35) · Compilación universal compatible con ARM64-v8a, armeabi-v7a y x86_64',
    staggerClass: 'stagger-4',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: '¿FritoMusic es completamente gratuito y sin anuncios?',
    answer:
      'Sí, 100%. FritoMusic es un proyecto sin fines de lucro desarrollado para la comunidad. No contiene banners, anuncios emergentes ni suscripciones premium obligatorias.',
    staggerClass: 'stagger-1',
  },
  {
    id: 2,
    question: '¿Puedo sincronizar mi cuenta en streaming?',
    answer:
      'Totalmente. FritoMusic te permite iniciar sesión de forma segura para acceder a tus listas creadas, tus canciones favoritas y artistas suscritos directamente en la app.',
    staggerClass: 'stagger-2',
  },
  {
    id: 3,
    question: '¿En qué calidad de audio se reproduce y descarga la música?',
    answer:
      'En streaming, FritoMusic reproduce directamente en códecs optimizados OPUS (~160 kbps) y AAC (hasta 256 kbps), garantizando gran fidelidad acústica sin consumir datos excesivos. Para descargas, puedes seleccionar entre 320 kbps y 160 kbps con carátula y metadatos incrustados.',
    staggerClass: 'stagger-3',
  },
  {
    id: 4,
    question: '¿Cómo funciona la migración de playlists?',
    answer:
      'Migrar playlist de otras apps de streaming a esta es muy sencillo: basta con pegar el enlace de tu lista y FritoMusic la reconstruirá en tu biblioteca automáticamente.',
    staggerClass: 'stagger-4',
  },
  {
    id: 5,
    question: '¿Dónde se guardan las canciones descargadas?',
    answer:
      'Puedes configurar tu carpeta de descargas tanto en la memoria interna de tu teléfono como en una tarjeta MicroSD externa a través de las opciones de almacenamiento con Storage Access Framework (SAF).',
    staggerClass: 'stagger-5',
  },
];
