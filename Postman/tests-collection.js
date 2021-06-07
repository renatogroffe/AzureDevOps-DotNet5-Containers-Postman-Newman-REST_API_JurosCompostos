var valorEmprestimo = JSON.parse(pm.collectionVariables.get("valorEmprestimo"));
var numMeses = JSON.parse(pm.collectionVariables.get("numMeses"));
var percTaxa = JSON.parse(pm.collectionVariables.get("percTaxa"));

if (valorEmprestimo > 0 && numMeses > 0 && percTaxa > 0) {
    
    pm.test("Retorno OK", function() {
        pm.response.to.be.ok;
        pm.response.to.json;
        pm.response.to.be.withBody;
    });

    var result = pm.response.json();

    pm.test("Checar Valor Empréstimo", function() {
        pm.expect(result.valorEmprestimo).to.eql(valorEmprestimo);
    });

    pm.test("Checar Número de Meses", function() {
        pm.expect(result.numMeses).to.eql(numMeses);
    });

    pm.test("Checar Taxa Percentual", function() {
        pm.expect(result.taxaPercentual).to.eql(percTaxa);
    });

    pm.test("Checar Valor Final com Juros", function() {
        pm.expect(result.valorFinalComJuros).to.eql(
            JSON.parse(pm.collectionVariables.get("valorComJuros"))
        );
    });
}
else {

    pm.test("Retorno Inválido", function() {
        pm.response.to.be.badRequest;
    });
    
}