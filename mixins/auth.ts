import { mapGetters } from 'vuex';
import { isEmpty } from 'lodash';

export default {
    computed: {
        authUserName() {
            if (!isEmpty(this.authUser)) {
                if ((this as any).isAdminAuthUser) {
                    return `${(this.authUser as any).firstName} ${(this.authUser as any).lastName}`;
                }
            }
        },
        ...mapGetters([
            'isAuthenticatedAuthUser', 'authUser', 'isAdminAuthUser'
        ])
    },
}
