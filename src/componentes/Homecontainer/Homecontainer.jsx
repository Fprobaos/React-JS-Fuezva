import Titulo from "../Titulo/Titulo"

const HomeContainer = ({children}) => {
    const titulo = 'Fuezva'
    const subTituloApp = 'sadas'

    // console.log(children)
    // console.log('alo')

        return(
            <div>
                <Titulo titulo={titulo} subTitulo={subTituloApp} />
            
                {children}
            </div>
        )
}

export default HomeContainer;