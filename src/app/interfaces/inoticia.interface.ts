export interface INoticia {
    id: number,
    titular: string,
    imagen: string,
    texto: string,
    secciones: string,
    fecha_publicacion: string,
    redactor_id: string,
    editor_id: string,
    categoria_id: string,
    estado: string,
    importancia: string,
    cambios: Date,
    slug: string
}
