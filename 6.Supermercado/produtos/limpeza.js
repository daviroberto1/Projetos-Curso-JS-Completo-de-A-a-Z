import Produto from "./produto.js";

export default class Limpeza extends Produto{

    constructor(nome,valor,codigo,tipo){
        super(nome,valor,codigo,tipo);
    }
    aplicaDesconto(){
        return this.valor - this.valor * 0.2;
    };
}