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
        async logout() {
            this.$router.push('/login?message=logout')
        }
    }
}