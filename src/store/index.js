import { createStore } from 'redux'


import rootReducer from './reducers'

//createStore essa função ira criar o estado global, onde fica armazenado o estado da nossa aplicação
//devemos passar um parametro, que seria uma função que retorna o nosso estado inicial 
const store = createStore(rootReducer)

export default store