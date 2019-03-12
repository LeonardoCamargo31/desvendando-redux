const INITIAL_STATE = {
    activeModule: {},
    activeLesson: {},
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' },
            ]
        },
        {
            id: 2, title: 'Aprendendo Redux', lessons: [
                { id: 3, title: 'Terceira aula' },
                { id: 4, title: 'Quarta aula' }
            ]
        }]
}

//essa função contem meu estado inicial
//toda vez que uma action é disparada recebemos dois parametros
//state=> representa o estado antes da alteração que a action pretende alterar
export default function course(state = INITIAL_STATE, action) {
    console.log(action)
    if (action.type === 'TOGGLE_LESSON') {
        //e aqui retorno o estado modificado
        //copio o estado ...state, sobrepondo activeLesson com o outro valor
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    }
    return state
}
