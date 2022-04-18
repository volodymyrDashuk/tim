import {mapActions} from "vuex";

export default {
    props: ['isOpen'],
    data: () => ({
        links: [
            {title: 'Dashboard', url: '/', class: 'dashboard-icon', exact: true},
            {title: 'Project', url: '/project', class: 'project-icon'},
            // {title: 'Activity', url: '/activity', class: 'activity-icon'},
            {title: 'Timesheet', url: '/timesheet', class: 'timesheet-icon'}
        ]
    }),
    methods: {
        ...mapActions(['logout']),
        async accountLogout() {
            await this.logout()
            this.$toast.show(`Logged out successfully.`,  {
                type: 'info'
            });
            await this.$router.push('/login')
        }
    }
}