import axios from "../../axios";

export default {
    state: {
        projects: [],
        updateProject: {}
    },
    actions: {
        async createProject(context, formData) {
            try {
                const newPost = await axios.post('projects', formData)
                this.dispatch('fetchProjects')
            } catch (e) {
                console.log(e)
            }
        },
        async fetchProjects(context) {
            try {
                const response = await axios.get('projects')
                const projects = await response.data.data;
                context.commit('setProjects', projects)
            } catch (e) {
                console.log(e)
            }
        },
        async removeProject(context, item) {
            try {
                const response = await axios.delete('projects/' + item)
                this.dispatch('fetchProjects')
            } catch (e) {
                console.log(e)
            }
        },
        async getProjectAction(context, id) {
            try {
                const response = await axios.get('projects/' + id)
                const item = response.data.data
                context.commit('setUpdatedProject', item)
            } catch (e) {
                console.log(e)
            }
        },
        async editProject(context, data) {
            try {
                const response = await axios.put('projects/' + data.id, data.formData)
                this.dispatch('fetchProjects')
            } catch (e) {
                console.log(e)
            }
        }
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