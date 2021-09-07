<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Técnicas de valoración

    .bloque-texto-a.color-primario.p-4
      .row.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t1-01.svg')
        .col-lg
          .bloque-texto-a__texto.p-4
            p Actualmente es fundamental realizar un proceso de evaluación de manera permanente, pues en todo momento el desempeño de las cosas es aplicable, bien sea en un objeto, una organización o una persona de manera particular. Es por esto que existen diferentes técnicas para valorar y medir en el tiempo el desempeño en cada una de las actividades programadas.

    Separador

    #1-1.titulo-segundo
      h2 1.1  Factores de desempeño

    .tarjeta.tarejeta--gradiente.p-5
      p.mb-5
        b Los factores de desempeño presentan una gran variedad de ventajas al momento de realizar la evaluación del cumplimiento de los objetivos pactados, las cuales se centran en: 

      .row.mb-5
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-02.svg')
            .col
              p.mb-0 Mejora el desempeño mediante la retroalimentación.
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-03.svg')
            .col
              p.mb-0 Ayuda a determinar quiénes merecen recibir aumentos salariales. 
        .col-12.mb-3.d-none.d-lg-block
          .divisor
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-04.svg')
            .col
              p.mb-0 Permite decidir sobre la reubicación del trabajador. 
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-05.svg')
            .col
              p.mb-0 Indica necesidades de formación y desarrollo profesional y personal.
        .col-12.mb-3.d-none.d-lg-block
          .divisor
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-06.svg')
            .col
              p.mb-0 Guía las decisiones sobre posibilidades profesionales específicas. 
        .col-lg-6.mb-3
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-07.svg')
            .col
              p.mb-0 Indica errores en el diseño de funciones laborales. 
        .col-12.mb-3.d-none.d-lg-block
          .divisor
        .col-lg-6
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/t1-08.svg')
            .col
              p.mb-0 Detecta factores externos de influencia en el rendimiento.

      .row.align-items-end.mb-5
        .col-4
          h2 Entre los métodos de evaluación de desempeño más usados se encuentran:

        .col-6
          img(src='@/assets/curso/t1-09.svg')

      LineaTiempoCB.color-secundario
        .row.align-items-center(titulo="Métodos de evaluación<br>de desempeño")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-10.svg')
          .col
            p.mb-0 Los métodos hacen referencia a un proceso ordenado y sistemático que permite proceder para llegar a un resultado determinado. Cuando se trata de la evaluación de desempeño, este establece una secuencialidad fundamental, en la medida que, posibilita hacer un seguimiento adecuado a los colaboradores de las organizaciones. 
        .row.align-items-center(titulo="Método de<br>escala gráfica")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-11.svg')
          .col
            p.mb-0 Es el de mayor uso y divulgación, permite la aplicación de un formulario de doble entrada donde las líneas horizontales representan los factores de evaluación de desempeño y las columnas verticales representan los grados de variación de tales factores.
        .row.align-items-center(titulo="Método de<br>elección forzada")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-12.svg')
          .col
            p.mb-0 Se evalúa al empleado a través de la asignación de frases descriptivas establecidas previamente, buscando que el evaluado deba elegir de manera forzada una y relacionarla con la persona en cuestión.
        .row.align-items-center(titulo="Método de<br>investigación de campo")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-13.svg')
          .col
            p Se desarrolla sobre la base de entrevistas hechas por un especialista con el supervisor inmediato, permitiendo verificar y evaluar el desempeño de sus subordinados, a partir de tres pasos fundamentales: 

            .tabla-a.color-primario
              table
                thead
                  tr
                    th Evaluación inicial
                    th Análisis suplementario
                    th Planeamiento
                tbody
                  tr
                    td.text-small Cada funcionario es evaluado inicialmente en uno de tres aspectos: 
                      b desempeño más satisfactorio, desempeño satisfactorio, desempeño menos satisfactorio.
                    td.text-small El desempeño definido en la evaluación inicial es evaluado con mayor profundidad mediante preguntas formuladas del especialista o asesor al jefe.
                    td.text-small Tras el análisis del desempeño viene la elaboración de un plan de acción. 

        .row.align-items-center(titulo="Método comparación<br>por pares")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-14.svg')
          .col
            p.mb-0 Permite comparar los empleados en turnos de a dos, anotándose en la columna de la derecha aquél que se considera que tiene mejor desempeño. El número de veces que un evaluado es considerado superior a otro se suma y constituye un índice.
        .row.align-items-center(titulo="Evaluación en<br>360 grados")
          .col-2.mb-4.mb-md-0
            img(src='@/assets/curso/t1-15.svg')
          .col
            p.mb-0 Posibilita hacer una evaluación objetiva, integrando las valoraciones de diferentes personas al interior de la organización.

    Separador

    #1-2.titulo-segundo
      h2 1.2 Planes de acción

    p.mb-5 Un plan de acción es una hoja de ruta que ayuda a lograr metas y objetivos. Un programa puede tomar muchos caminos para alcanzar las metas, cumplir los objetivos y lograr resultados. Es una parte esencial del proceso de planificación estratégica y ayuda a mejorar la planificación del trabajo en equipo. No solo en la gestión de proyectos, las personas pueden utilizar planes de acción para preparar una estrategia para lograr sus propios objetivos personales.

    .tarjeta.color-acento-botones--claro.p-5.mb-5
      .row.align-items-center.justify-content-around
        .col-auto.mb-5.mb-lg-0
          h3.mb-4.text-blue Los planes de acción están conformados por: 
          ul.lista-ul.mb-0
            li 
              i.fas.fa-check.text-blue
              | Una descripción bien definida del objetivo a alcanzar.
            li 
              i.fas.fa-check.text-blue
              | Tareas / pasos que deben realizarse para alcanzar la meta.
            li 
              i.fas.fa-check.text-blue
              | Personas que se encargarán de realizar cada tarea.
            li 
              i.fas.fa-check.text-blue
              | Fechas límites de cumplimiento. 
            li 
              i.fas.fa-check.text-blue
              | Recursos necesarios para completar las tareas.
            li.mb-0
              i.fas.fa-check.text-blue
              | Medidas para evaluar el progreso.
        .col-4
          img(src='@/assets/curso/t1-16.svg')

    p.mb-5 Así mismo, existen diferentes tipos de planes de acción los cuales se representan en la siguiente tabla: 

    .titulo-sexto.color-acento-contenido
      h4.mb-0.d-inline-block.me-2 Tipos de planes de acción.

    .tabla-a.color-primario
      table
        caption Nota. SENA, (2021)
        thead
          tr
            th PLAN DE ACCIÓN
            th(colspan="3") CONCEPTO
        tbody
          tr
            td
              h5.mb-0 Estratégico
            td(colspan="3") Ayuda a priorizar los objetivos, maximizar los recursos y tomar mejores decisiones, lo que aumenta la eficiencia y la eficacia de la organización.
          tr
            td 
              h5.mb-0 Comercial
            td(colspan="3") Es un documento que permite a los ejecutivos de la empresa visualizar todas las acciones comerciales y les ayuda a verificar que las elecciones y los resultados obtenidos están en línea con las expectativas.
          tr
            td
              h5.mb-0 Marketing
            td(colspan="3") Es una hoja de ruta estratégica que las empresas utilizan para organizar, ejecutar y realizar un seguimiento de su estrategia de marketing durante un período de tiempo determinado.

</template>

<script>
import LineaTiempoCB from '../components/LineaTiempoC'
export default {
  name: 'Tema1',
  components: { LineaTiempoCB },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
