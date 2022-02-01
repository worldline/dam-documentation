<template>
  <div id="swagger-ui-wrapper"></div>
</template>

<script>
  import SwaggerUI from 'swagger-ui'
  import 'swagger-ui/dist/swagger-ui.css'

  export default {
    // relating to the attribute define in outer <router-view> tag.
    name: 'ApiDocWrapper',
    data() {
      return {}
    },
    mounted() {
      const domNode = document.getElementById('swagger-ui-wrapper')
      const spec = require('./api-docs.yaml')
      const urlParts = window.location.href.split('/')
      urlParts.pop()
      // config: https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
      const ui = SwaggerUI({
        spec,
        domNode,
        docExpansion: 'list',
        deepLinking: true,
        operationsSorter: 'method',
        tagsSorter: 'alpha',
        supportedSubmitMethods: [],
        defaultModelsExpandDepth: 0
      })
    }
  }
</script>