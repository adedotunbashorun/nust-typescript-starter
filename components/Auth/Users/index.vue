<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <!-- <h1 class="h2">Users</h1> -->
    <div class="container-fluid">
      <b-card>
        <data-table url="users" :columns="columns" @activate="activate" :transformData="transformData" />
      </b-card>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { columns,transformData } from "@/utils/columnDefs/users";
  import {transformColumnDef} from "~/utils/helpers";
export default Vue.extend({
  data: () => {
    return {columns, transformData}
  },
  computed: {
    // columns() {
    //   return transformColumnDef(columns);
    // },
  },
  components: {
    Table: () => import('@/components/Utilities/DataTable.vue'),
    DataTable: () =>  import('~/components/Utilities/DataTable.vue'),
    CurrenciesSelectInput: () => import('~/components/currencies/CurrenciesSelectInput.vue')
  },
  methods: {
    activate(id:string){
      alert(id);
    }
  }
})
</script>
