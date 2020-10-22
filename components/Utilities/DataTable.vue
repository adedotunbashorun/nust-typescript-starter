<template>
	<div :class="wrapperClass">
    <b-col lg="12" class="my-1">
      <b-form-group
        label-align-sm="right"
        label-for="filterInput"
        class="mb-3"
      >
        <b-input-group>
          <b-form-input
            v-model="search"
            type="search"
            id="filterInput"
            placeholder="Type to Search"
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!search" @click="search = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-table
      :items="response.nodes"
      :busy.sync="isLoading"
      :fields="columns"
      :filter="search"
      outlined
      responsive
      :filter-included-fields="filterOn"
      :sort-by.sync="sortField"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortOrder"
      :filtered="onFiltered"
      :current-page="response.currentPage"
      :per-page="response.perPage"
      :page-change="onPageChange"
      :no-provider-paging="false"
      >
      <template #cell()="row">
        <template v-for="(column, index) in columns">
          <b-td
            v-if="row.field.key === column.key"
            :field="column.key"
            :label="column.label"
            :searchable="column.searchable"
            :sortable="column.sortable" :key="index">
            <template v-if="column.renderHtml">
              <VRuntimeTemplate :template="row.item[column.key]"></VRuntimeTemplate>
            </template>
            <template v-else-if="column.type === 'date'">
              {{ getValueByPath(row.item, column.key) | formatDate }}
            </template>
            <template v-else-if="column.type === 'currency'">
              {{ getValueByPath(row.item, column.key) | currency(getValueByPath(row,
              'currency.symbol')) }}
            </template>
            <template v-else>
              {{ getValueByPath(row.item, column.key,'N/A') }}
            </template>
          </b-td>
        </template>
      </template>
    </b-table>
    <b-pagination
      align="right"
      v-model="response.currentPage"
      :total-rows="response.itemCount"
      :per-page="response.perPage"
      @change="onPageChange"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import VRuntimeTemplate from "v-runtime-template";
import dataTableFilters from "~/utils/dataTableFilters";
import {getValueByPath} from "~/utils/helpers";
import { isEmpty, concat, isFunction } from 'lodash';
import auth from '~/mixins/auth';
export default Vue.extend({
  mixins: [auth],
  props: {
    url: String,
    baseFilter: {
      type: Object,
      default: () => {
      },
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    paginated: {
      type: Boolean,
      default: true,
    },
    sortable: {
      type: Boolean,
      default: true,
    },
    filtering: {
      type: Boolean,
      default: true,
    },
    columns: {
      type: Array,
    },
    transformData: {
      type: Function,
      default: (data: any) => {
        return data;
      }
    }
  },
  data: () => {
    return {
      response: {
        nodes: [],
        currentPage: 1,
        pageCount: 0,
        itemCount: 0,
        perPage: 10
      },
      getValueByPath,
      isLoading: false,
      sortField: '',
      sortDesc: false,
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      filterOn: [],
      search: '',
    }
  },
  computed: {
    isEmptyData() {
      return isEmpty(this.response.nodes);
    },
    sortOptions() {
        // Create an options list from our fields
        return this.columns
          .filter((f: any )=> f.sortable)
          .map((f: any) => {
            return { text: f.label, value: f.key }
          })
      }
  },
  methods: {
    async getAsyncData() {
        let params: any = [
            `page=${(this as any).response.currentPage}`,
            `limit=${(this as any).response.perPage}`,
        ];
        params = concat((this as any).filters, params).join('&');
        (this as any).isLoading = true;
        await this.$axios.$get(`${(this as any).url}?${params}`).then(response => {
          console.log(response);
            (this as any).response = response;
            (this as any).response.nodes = this.transformData(response.nodes);
            (this as any).isLoading = false;
        }).catch((error) => {
            (this as any).response.nodes = [];
            (this as any).response.itemCount = 0;
            (this as any).isLoading = false;
            throw error
        });
    },
    onPageChange(page: number) {
      this.response.currentPage = page;
      (this as any).getAsyncData();
    },
    onSort(field: any, order: any) {
      this.sortField = field;
      this.sortOrder = order;
      (this as any).getAsyncData();
    },
    onFilterChange(filters: any) {
      (this as any).columnFilters = {...(this as any).columnFilters, ...filters};
      console.log((this as any).columnFilters);
      (this as any).filters = Object.keys((this as any).columnFilters).map(key => {
        if ((this as any).columnFilters[key] !== '') {
          return `${key}=${(this as any).columnFilters[key]}`
        }
      });
      (this as any).getAsyncData();
    },
    onFiltered(filteredItems: any) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.response.itemCount = filteredItems.length
      this.response.currentPage = 1
    },
    filter(value: any, filterName = 'currencyFilter') {
      // if (isFunction(dataTableFilters[filterName])) {
      //   (this as any).onFilterChange(dataTableFilters[filterName](value));
      // }
      (this as any).getAsyncData();
    }
  },
  async mounted() {
    console.log(this.baseFilter);
    (this as any).onFilterChange(this.baseFilter);
    await (this as any).getAsyncData();
  },
  components: {
    VRuntimeTemplate
  }
});
</script>
