//essa função vai definir uma lesson e module como ativa
export function toggleLesson(module,lesson){
    return{
        type:'TOGGLE_LESSON',//indicar qual ação esta sendo realizada e precisa ser unica
        module,
        lesson
    }
}