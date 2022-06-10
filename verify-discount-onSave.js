let subForms = ZDK.Page.getForm().getValues().Quoted_Items;
console.log(subForms);

var calculationTotal = 0
var maxValueApproved = 0;

subForms.forEach(obj =>
    {
   
    const name = obj.Product_Name.name;
    const quantidade = obj.Quantity;
    const precoUnitario = obj.List_Price;
    const discount = obj.Discount;
    const valorFinal = obj.Net_Total;

    calculationTotal = precoUnitario*quantidade;
    maxValueApproved = discount/calculationTotal;

if (maxValueApproved>0.1) {
    console.log("_________________________________")
    console.log("__Produto com desconto maior que o permetido " +name);
    console.log("Valor final dado pela empresa: " + valorFinal);
    // conso.log("Valor maximo com 10% de desconto: " +maxValueApproved);
    console.log("Valor do desconto:"+discount);
    console.log("Preço unitário do produto:" + precoUnitario);
    console.log("Quantidade:" + quantidade);
    console.log("_________________________________")
    ZDK.Client.showAlert("Produto com desconto acima do permitido: " +name);
 
    
        }

});

 



