export default {
    namespaced: true,
    // Modülün state alanı
    state: {
        itemList: [],
        userList: []
    },
    // modülün mutation alanı
    mutations: {
        setItem(state, item) {
            state.itemList.push(item);
        }
    },
    // modülün getters alanı
    getters: {
        _itemList: state => state.itemList
    }
}