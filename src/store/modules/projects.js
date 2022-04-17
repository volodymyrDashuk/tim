import axios from "../../axios";

export default {
    state: {
        projects: [],
        updateProject: {}
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
        },
        async getProjectAction(context, id) {
            const response = await axios.get('projects/' + id)
            const item = response.data.data
            context.commit('setUpdatedProject', item)
        },
        async editProject(context, data) {
            const response = await axios.put('projects/' + data.id, data.formData)
            this.dispatch('fetchProjects')
        },
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects
        },
        setUpdatedProject(state, item) {
            state.updateProject = item
        }
    },
    getters: {
        getProjects(state) {
            return state.projects
        },
        getUpdateProject(state) {
            return state.updateProject
        }
    }
}