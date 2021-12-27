<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Planes de mejora

    .bloque-texto-a.color-primario.p-4.mb-4
      .row.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t2-01.svg')
        .col-lg
          .bloque-texto-a__texto.p-4
            p Es un conjunto de medidas de cambio las cuales se implementan en una organización como parte de un proceso en el cual se identifica un hallazgo. El plan que se formule debe orientar a la mejora y rendimiento en sus componentes, sistemas, subsistemas, procesos, proyectos o actividades, en donde se identificó tal hallazgo. El plan de mejora es utilizado para determinar los criterios de soluciones para un hallazgo.

    .row.justify-content-center
      .col-10
        h4.mb-0.text-blue Las medidas de mejora deben ser sistemáticas, no improvisadas ni aleatorias, por lo que deben planificarse cuidadosamente, llevarse a la práctica y constatar sus efectos. 

    Separador

    #2-1.titulo-segundo
      h2 2.1 Estrategia

    p.mb-5 Son las diferentes series de acciones muy meditadas, encaminadas hacia un fin determinado. En este sentido, el plan de mejora a través de una estrategia clara y pertinente, permite: 


    .tarjeta.color-acento-botones--claro.p-5
      .row.align-items-center.justify-content-around
        .col-auto.mb-5.mb-lg-0
          ul.lista-ul.mb-0
            li 
              i.fas.fa-check.text-blue
              | Disponer de un plan de las acciones a desarrollar en un futuro.
            li 
              i.fas.fa-check.text-blue
              | Disponer de un sistema de seguimiento y control de estas. 
            li 
              i.fas.fa-check.text-blue
              | Identificar las causas que provocan las debilidades detectadas. 
            li 
              i.fas.fa-check.text-blue
              | Identificar las acciones de mejora a aplicar. 
            li 
              i.fas.fa-check.text-blue
              | Negociar la estrategia a seguir. 
            li 
              i.fas.fa-check.text-blue
              | Analizar su viabilidad. 
            li 
              i.fas.fa-check.text-blue
              | Establecer prioridades en las líneas de actuación. 
            li.mb-0
              i.fas.fa-check.text-blue
              | Incrementar la eficacia y eficiencia de la gestión. 

        .col-4
          img(src='@/assets/curso/t2-02.svg')

    Separador

    #2-2.titulo-segundo
      h2 2.2 Metas

    p.mb-5 En los planes de mejora, las metas hacen referencia a las acciones finales que se deben llevar a cabo para el cumplimiento de la estrategia. A continuación, en la siguiente figura se podrá conocer los pasos establecidos: 

    .row.justify-content-center
      .col-sm-10.col-md-8.col-lg-6

        .titulo-sexto.color-secundario.mb-5
          span Elaboración plan de mejora
        figure
          img(src='@/assets/curso/t2-03.svg')
          figcaption.mt-5 Nota. SENA, (2021)


    Separador

    #2-3.titulo-segundo
      h2 2.3 Indicadores

    p.mb-5 Los indicadores son instrumentos que aportan información relevante para evaluar el desempeño y en qué medida se están cumpliendo los objetivos estratégicos de las diferentes áreas o departamentos de la organización. En este sentido, un indicador de evaluación se puede utilizar para medir el desempeño global del colaborador. A continuación, se conocerán las características más representativas de estos: 


    .titulo-sexto.color-secundario.mb-4
      span Características de indicadores de desempeño

    .row.align-items-center.tarjeta-des.mb-5
      .col-7.col-md-5.mb-4.mb-md-0
        img(src='@/assets/curso/t2-04.svg')
      .col-md.py-4
        ul.lista-tarjetas.mb-0
          li 
            span Ayudan a la organización a progresar y mejorar sus procesos.
          li 
            span Sirven para reducir costos  operativos.
          li 
            span La información queproporcionan es fiable.
          li 
            span Son cuantificables.
          li 
            span Comparables en el tiempo y ayudan a marcar tendencias.
          li.mb-0
            span Determinan los resultados de los procesos en relación a los objetivos marcados inicialmente.

    h3.mb-5.text-blue Los indicadores también se pueden clasificar en categorías de la siguiente manera: 

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-secundario()
        .row.justify-content-center.align-items-center(titulo="1. De eficacia")
          .col-9.col-md-6
            p.mb-0 Se relacionan con la capacidad y/o acierto en la consecución de los objetivos de los procesos.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-05.svg')
        .row.justify-content-center.align-items-center(titulo="2. De eficiencia")
          .col-9.col-md-6
            p.mb-0 Se relacionan con los recursos invertidos en la consecución de los objetivos de los procesos.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-06.svg')
        .row.justify-content-center.align-items-center(titulo="3. De cumplimiento")
          .col-9.col-md-6
            p.mb-0 Se relacionan con el grado de consecución de los objetivos de los procesos.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-07.svg')
        .row.justify-content-center.align-items-center(titulo="4. De productividad")
          .col-9.col-md-6
            p.mb-0 Relacionados con los niveles de productividad del proceso.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-08.svg')
        .row.justify-content-center.align-items-center(titulo="5. De evaluación")
          .col-9.col-md-6
            p.mb-0 Se relacionan con la medición y el rendimiento que se obtiene de una actividad o proceso.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-09.svg')
        .row.justify-content-center.align-items-center(titulo="6. De calidad	")
          .col-9.col-md-6
            p.mb-0 Relacionados con los niveles de calidad del proceso. Ayudan a identificar posibles complicaciones y problemas.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-10.svg')
        .row.justify-content-center.align-items-center(titulo="7. De satisfacción del cliente")
          .col-9.col-md-6
            p.mb-0 Relacionados con los niveles de calidad del proceso, desde el punto de vista del cliente.
          .col-3.col-md-2
            img(src='@/assets/curso/t2-11.svg')

</template>

<script>
export default {
  name: 'Tema2',
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
