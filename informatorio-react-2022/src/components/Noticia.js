function Noticia(){
    const noticia = {
        titulo: "Noticia Importante",
        descripcion: "Descripcion de noticia importante."
    }

    const {titulo, descripcion} = noticia

    return (
        <div >
            <h1> Mira esta noticia: {titulo}</h1>
        </div>
    )
}

export default Noticia