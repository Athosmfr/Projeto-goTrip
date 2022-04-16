export interface Passagem{
    id: Number,
    origem: string,
    destino: string,
    data_ida: Date,
    data_volta: Date,
    preco: number,
    taxas: number
}