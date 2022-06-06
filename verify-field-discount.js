let getFieldValues = ZDK.Page.getForm().getValues().Subformul_rio_6;
var save_btn = ZDK.Page.getButton('record_save');
let value = 0;
let discount = "";
getFieldValues.forEach(obj => {//goes trough the object array
    for (let field in obj) {//Iterates over each object
        if (field == "Pre_o_Unit_rio_1") value = obj[field];//get value
        if (field == "Desconto")  discount = obj[field].toString();//get value
    }
});
function validation() {
    let containsSymbol = discount.includes('%');//Verify if the value has % 
    discount = discount.replace(/\D+/g, "");//get only the numbers
    discount = Number(discount);//Transform the string into a number
    if (containsSymbol && discount > 10) return ZDK.Client.showAlert("O valor que você quer dar de desconto é maior do que 10% do produto");//if contains the symbol and the value is greater than 10, return error
    if (!value) return ZDK.Client.showAlert("O valor do produto não foi inserido para a realização do cálculo do desconto!");//Verify if the price was sent

    let allowedValue = (10 * value) / 100;//do the calculation and get the result

    if (discount > allowedValue) {
        ZDK.UI.freeze(true)
        return ZDK.Client.showAlert("O valor que você quer dar de desconto é maior do que 10% do produto");//If the value inserted on discount is greater than the result above, return error
    } 
}
validation();

