export default {
  'CHANGE_ASYNC'(store, newcount) {
    setTimeout(() => {
      store.commit('CHANGE_COUNT', newcount)
    },2000)
  }
}
