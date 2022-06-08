let subforms = ZDK.Page.getForm().getValues().Quoted_Items;

console.log(subforms);

subforms.forEach(obj =>
    {
    for (let field in obj) {

        if (field == "Discount") discount = obj[field].toString();
        console.log("Dentro do forEach desconto:"+discount);

        if (field == "List_Price") list_price = obj[field].toString();
        console.log("Dentro do forEach lista de preço:" +list_price);

        if (field == "Quantity") quantidade = obj[field].toString();
        console.log("Dentro do forEach quantidade:" +quantidade);

        if (field == "Net_Total") net_total = obj[field].toString();
        console.log("Valor Total: " +net_total);

        const calculationTotal = list_price*quantidade;
        const newValue = (calculationTotal*0.1)+calculationTotal;
        console.log("Calculo multiplicacao: "+calculationTotal);
        console.log("Calculo Total: " + newValue);

        if (newValue > net_total) {
            console.log("____________________________Desconto maior que o permitido_________________________");
        }
        
    }
});

console.log("Fora do forEach desconto:"+discount);
console.log("Fora do forEach lista de preço:" + list_price);
console.log("Dentro do forEach " + quantidade);
console.log("Ultimo calculo multiplicação:" + calculationTotal);
console.log("Novo valor: " + newValue);
