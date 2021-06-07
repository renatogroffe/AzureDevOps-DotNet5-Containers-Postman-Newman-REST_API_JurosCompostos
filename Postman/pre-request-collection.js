if (pm.iterationData.get("valorEmprestimo") != undefined) {
    pm.collectionVariables.set("valorEmprestimo", pm.iterationData.get("valorEmprestimo"));

    if (pm.iterationData.get("valorComJuros") != undefined)
        pm.collectionVariables.set("valorComJuros", pm.iterationData.get("valorComJuros"));
    else
        pm.collectionVariables.set("valorComJuros", -9999999);
}

if (pm.iterationData.get("numMeses") != undefined)
    pm.collectionVariables.set("numMeses", pm.iterationData.get("numMeses"));

if (pm.iterationData.get("percTaxa") != undefined)
    pm.collectionVariables.set("percTaxa", pm.iterationData.get("percTaxa"));