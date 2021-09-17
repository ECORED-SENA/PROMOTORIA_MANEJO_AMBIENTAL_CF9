export default {
  global: {
    componenteFormativo: 'Evaluación de desempeño y planes de mejora',
    descripcionCurso:
      'En el componente se abordan temas que permiten la evaluación de las capacidades adquiridas, la manera de evaluarlas, las medidas a tomar con los resultados y la estructuración de planes de mejora para un restablecimiento en el funcionamiento de los procesos dentro de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de valoración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Factores de desempeño',
            hash: '1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Planes de acción',
            hash: '1-2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planes de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategia',
            hash: '2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metas',
            hash: '2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores',
            hash: '2-3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Calidad en los procesos de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Valoración del proceso formativo',
            hash: '3-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructurar acciones de mejora',
            hash: '3-2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación (s.f.). Plan de mejoras. ',
      link:
        'http://www.uantof.cl/public/docs/universidad/direccion_docente/15_elaboracion_plan_de_mejoras.pdf ',
    },
    {
      referencia:
        'Nueva ISO 9001:2015. (2020). ¿Cuál es el sistema de calidad utilizado en las entidades de formación? ',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/08/cual-es-el-sistema-de-calidad-utilizado-en-las-entidades-de-formacion/ ',
    },
    {
      referencia:
        'Superintendencia de sociedades (2015). Acciones correctivas, preventivas, de mejora. ',
      link:
        'https://www.supersociedades.gov.co/nuestra_entidad/Planeacion/SistemaIntegradode%20Gestion/Documentos%20Calidad/DOCUMENTOS/GC-PR-002%20ACCIONES%20CTVAS.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Eficacia',
      significado:
        'se relaciona con el cumplimento de objetivos. Un producto, servicio o persona, es eficaz cuando es capaz de hacer lo que sea necesario para lograr los objetivos deseados o marcados.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'hace referencia al cumplimiento de las metas con la menor cantidad de recursos.',
    },
    {
      termino: 'Indicadores',
      significado:
        'instrumentos que aportan información relevante para evaluar el desempeño y en qué medida se están cumpliendo los objetivos estratégicos.',
    },
    {
      termino: 'Metas',
      significado:
        'es el resultado esperado o imaginado de un sistema, una acción o una trayectoria, es decir, aquello que se espera obtener siguiendo un procedimiento específico.',
    },
    {
      termino: 'Valoración',
      significado:
        'proceso y el resultado de valorar, que permite apreciar o reconocer el valor de algo o alguien. ',
    },
  ],
  complementario: [
    {
      texto:
        'Agropecuaria Santamaría. (2018). Noti Lunes Acciones Correctivas y de Mejora. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RV4dmq9jW18',
    },
    {
      texto:
        'Factorial HR. (2019). Evaluación del desempeño laboral [LOS 7 MÉTODOS]. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E1kafEzzIpg',
    },
    {
      texto:
        'Inclusión Ecuador. (2014). Tutorial planes de mejora.  [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sNUSsXHxQ3Q',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Pérez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
