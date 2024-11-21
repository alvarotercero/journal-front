export interface INoticia {
    id: number;
    titular: string;
    imagen: string;
    texto: string;
    secciones: string;
    fecha_publicacion: Date;
    redactor_id: number;
    editor_id: number;
    categoria_id: number;
    estado: string;
    importancia: number;
    cambios: null | string;
    slug: string;
    slug_cat?: string
}