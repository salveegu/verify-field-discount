let subForms = ZDK.Page.getForm().getValues().Quoted_Items;
// let getName = subforms.getValues().Product_Name.name;
 
console.log(subForms);
 
var calculationTotal = 0
var maxValueApproved = 0;
 
subForms.forEach(obj =>
    {
    for (let field in obj) {
 
        if (field == "Product_Name") product_name = obj[field].toString();
 
        if (field == "Quantity") quantidade = obj[field].toString();
 
        if (field == "List_Price") list_price = obj[field].toString();
 
        if (field == "Discount") discount = obj[field].toString();
       
        if (field == "Net_Total") net_total = obj[field].toString();
        
         calculationTotal = list_price*quantidade;
        maxValueApproved = discount / calculationTotal;
 
        
     
    }
     if ( maxValueApproved>0.1) {
    console.log("_________________________________")
    console.log("__Produto com desconto maior que o permetido " + +product_name);
    console.log("Valor final dado pela empresa: " + netTotalInt);
    // conso.log("Valor maximo com 10% de desconto: " + maxValueApproved);
    console.log("Valor do desconto:"+discount);
    console.log("Preço unitário do produto:" + list_price);
    console.log("Quantidade:" + quantidade);
         console.log("_________________________________")
         ZDK.Client.showAlert("Produto com desconto acima do permitido: " +product_name);
 
    
        }
 
 
});
 
 

