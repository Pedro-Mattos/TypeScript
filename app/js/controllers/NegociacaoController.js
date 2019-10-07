class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        //fizemos um casting para o tipo htmlImputElement pois estamos do especifico para o geral que seria um element.
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update();
    }
    //tipei o event para o tipo Event para que o ts perceba.
    adiciona(event) {
        event.preventDefault();
        //conversao em string para date, string para inteiro e para float no caso de valor
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        console.log(negociacao);
    }
}
