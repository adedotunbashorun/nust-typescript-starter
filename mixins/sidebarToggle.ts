import { mapGetters } from 'vuex';
export default {
    computed: {
      toggle() {
        return this.toggleSidebar
      },
      ...mapGetters([
        'toggleSidebar'
      ])
    },
}
