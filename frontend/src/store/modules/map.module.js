const mapVars = {
    map: null
}

export const map = {
    state: () => ({
        driverName: undefined
    }),
    getters: {
        getMap: (state) => () => {
            return mapVars
        },
    },
    mutations: {
        setDriverName(state, driverName) {
            state.driverName = driverName
        }
    }
}