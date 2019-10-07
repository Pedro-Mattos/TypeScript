class NegociacaoController {

    //tipamos o tipo input pois o tipo element é muito genérico e não consegue receber a propriedade value.
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');



    constructor() {
        //fizemos um casting para o tipo htmlImputElement pois estamos do especifico para o geral que seria um element.
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update();
    }

    //tipei o event para o tipo Event para que o ts perceba.
    adiciona(event: Event) {

        event.preventDefault();

        //conversao em string para date, string para inteiro e para float no caso de valor
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));

        this._negociacoes.adiciona(negociacao);

        console.log(negociacao);
    }
    
}