const mapVars = {
    map: null
}

export const map = {
    state: () => ({
        driverName: undefined,
        viewMode: '3d',
        bearingMode: false
    }),
    getters: {
        getMap: (state) => () => {
            return mapVars
        },
        getViewMode: (state) => () => {
            return state.viewMode
        },
        getBearingMode: (state) => () => {
            return state.bearingMode
        },
    },
    mutations: {
        setDriverName(state, driverName) {
            state.driverName = driverName
        }
    }
}