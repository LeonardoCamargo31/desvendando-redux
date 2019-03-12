import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
//bindActionCreators ele vai pegar o objeto de actions  
//e vai mapear em forma de propriedades para o nosso componente

//o connect, ele segue um padrão chamado high order component
//é um pattern do react para compartilhar alguma informação para algum componente 

//esse componente no caso, queremos o estado do redux

// * => importar tudo 
import * as CourseActions from '../../store/actions/couse'

//pegando o 'modules' que foi passado do 'connect'
const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

const mapStateToProps = state => ({
    modules: state.course.modules
})

/*const mapDispatchToProps = dispatch => ({
    //os parametros da minha função (module,lesson)
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})*/
//com o bindActionCreators
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)


//passo dois parametros, o Sidebar como um segundo parametro
//o connect recebe uma função, uma função que recebe o estado por parametro e  retorna quais propriedades eu quero daquele estado
//aqui no caso quero o estado todo
//export default connect(state => ({ modules: state.course.modules }))(Sidebar)
//ou para deixat mais enxuto ainda
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)