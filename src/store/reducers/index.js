import {combineReducers} from 'redux'

//combineReducers para quando tenho varios Reducers

import course from './couse'

export default combineReducers({
    course,
    //user,
    //outros...
})

//antes tinhamos o obj
// {modules: [], activeModule:{}, activeLesson:{}}

//e com o combineReducers, vamos colocar isso dentro de outro objeto, que no caso chamados de course
// {
//   course: {modules: [], activeModule:{}, activeLesson:{}},
//   user: {name:'', avatar:''}
// }

//então quando utilizamos o combineReducers ele basicamente transforma nosso estado em obj, que é subdividido em categorias poderiamos dizer