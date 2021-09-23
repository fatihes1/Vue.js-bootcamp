export default {
    namespaced: true,
        // Modülün state alanı
    state: {
        contactName: "Fatih",
        contactAddress: "Mersin",
        propertyList: []
    },
    // modülün mutation alanı
    mutations: {
        setItem(state, name){
            state.contactName = name;
        }
    },
    // modülün getters alanı
    getters: {
        _contactName: state => state.contactName
    }
}