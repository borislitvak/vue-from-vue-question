<template>
  <vuetable ref="vuetable"
    api-url="http://vuetable.ratiw.net/api/users"
    :fields="['name', 'email', 'birthdate']"
    :css="css"
  ></vuetable>
</template>

<script lang="ts">
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  components: {
    Vuetable
  },
  asdf 
asdf
  data () {
  	return {
      css: {
        tableClass: 'table table-striped table-bordered'
      }
  	}
  }
}
</script>



<docs>
## This is a Table component.
</docs>