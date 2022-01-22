import axios from "../../axios";

export default {
    state: {
        projects: []
    },
    actions: {
        async createProject(context, formData) {
            const newPost = await axios.post('projects', formData)
            this.dispatch('fetchProjects')
        },
        async fetchProjects(context) {
            const response = await axios.get('projects')
            const projects = await response.data.data;
            context.commit('setProjects', projects)
        },
        async removeProject(context, item) {
            const response = await axios.delete('projects/' + item)
            this.dispatch('fetchProjects')
        }
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects
        }
    },
    getters: {
        getProjects(state) {
            return state.projects
        }
    }
}