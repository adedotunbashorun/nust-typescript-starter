<template>
	<b-select @input="change" class="is-primary" v-model="selectedCurrency" :loading="isLoading">
		<option :value="{}" v-if="defaultOption">{{defaultOption}}</option>
		<option :value="currency" v-for="currency in currencies" :key="currency.id">{{currency.code}}</option>
	</b-select>
</template>

<script>
    export default {
        props: {
            defaultOption: {
                default: ''
            }
        },
        data() {
            return {
                currencies: [],
                selectedCurrency: {},
	            isLoading: false
            }
        },
        methods: {
            change(value){
                this.selectedCurrency = value;
                this.$emit('input',value)
            },
        },
	    async mounted(){
            // this.isLoading = true;
            // await this.$axios.$get('currencies').then(response => {
            //     this.isLoading = false;
            //     this.currencies = response.data.rows;
            //     if(!this.defaultOption) this.change(this.currencies[0]);
            // });
	    }
    }
</script>
