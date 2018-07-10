
// function to create input for circumference
var circumferenceVal;
function handleCircumference() {
    var circumferenceData = document.getElementsByClassName("phonenumberfield");
    if (circumferenceData.length > 0) {

        circumferenceData[0].insertAdjacentHTML('afterend', `<div class="textfield field"><label> Circumference </label>
        <div class="textfield">
        <input id="circumference" placeholder="optional in cm" maxlength="3" class="textfield-rangechecker" pattern="\d*"
        oninput="updateCircumferenceValue(this.value); this.value = circumferenceVal;"
         type="number">
        </div></div>`);

    }
}
handleCircumference();

// function to update circumference session storage setValue

function updateCircumferenceValue(data) {
    if (data.length > 2 ) {
        data = data.slice(0, 2);
        circumferenceVal = data;
        sessionStorage.setItem( 'keyCircumference' , circumferenceVal );
    }
    else {
         circumferenceVal = data;
         sessionStorage.setItem( 'keyCircumference' , circumferenceVal );
    }

    return circumferenceVal;

}

// function to create input for shoe shize value
var shoeVal;
function handleShoeSize() {
    var shoeSize = document.getElementsByClassName("phonenumberfield");
    if (shoeSize.length > 0) {

        shoeSize[0].insertAdjacentHTML('afterend', `<div class="textfield field"><label> Shoe Size </label>
        <div class="textfield">
        <input id="shoeSize" placeholder="optional" maxlength="2" class="textfield-rangechecker" pattern="\d*"
        oninput="updateShoeSizeValue(this.value); this.value = shoeVal;"
         type="number">
        </div></div>`);
    }
}
handleShoeSize();
// function to update session storage for shoe size

function updateShoeSizeValue(data) {
    if (data.length > 2 ) {
        data = data.slice(0, 2);
        shoeVal = data;
        sessionStorage.setItem( 'keyShoeSize' , shoeVal );
    }
    else {
         shoeVal = data;
         sessionStorage.setItem( 'keyShoeSize' , shoeVal );
    }

    return shoeVal;

}
// function to create input for weight
var currval;
function handleWeight() {
    var weightInKg = document.getElementsByClassName("phonenumberfield");
    if (weightInKg.length > 0) {

        weightInKg[0].insertAdjacentHTML('afterend', `<div class="textfield field"><label> Weight in KG</label>
        <div class="textfield">
        <input id="kgweight" placeholder="optional" maxlength="3" class="textfield-rangechecker" pattern="\d*"
        oninput="updateWeightValue(this.value); this.value = currval;"
         type="number">
        </div></div>`);
    }
}
handleWeight();
// function to update the session for the weight input
function updateWeightValue(data) {
    if (data.length > 3 ) {
        data = data.slice(0, 3);
        currval = data;
        sessionStorage.setItem( 'keyweight' , currval );
    }
    else {
         currval = data;
         sessionStorage.setItem( 'keyweight' , currval );
    }

    return currval;

}
// function that displays the text and the value giving in the input
function displayValues() {
    var placeValues = document.getElementsByClassName("h3--blue");
        if (placeValues.length > 0) {
            var weightData = sessionStorage.getItem( 'keyweight' );
            var shoeSizeData = sessionStorage.getItem( 'keyShoeSize' );
            var circumferenceData = sessionStorage.getItem( 'keyCircumference' );
            function checkValue(data){
                if (data === null){
                    data = ` "Not available" `;
                }
                return data;
            }
            placeValues[0].insertAdjacentHTML('afterend', `<div class="hold-luggage"> <div class="HV-gs--bp0 HV-gs--bp10 HV-gs--bp22"> <div class="panel">
                                                    <div class="panel_section panel_section--content"> <h2 class="h4"> Additional Personal details </h2>
                                                    <ul> <li> Weight: Your weight is: ${checkValue(weightData)} We ask this to know if you, combined with your
                                                    luggage, do not exceed our maximum weight regulations per pessenger.</li>
                                                    <li> Shoe Shize: Your shoe size is: ${checkValue(shoeSizeData)}. We ask this to know
                                                    if your shoes will fit under the seat in front of you </li>
                                                    <li> Circumference: Your circumference is: ${checkValue(circumferenceData)} . We ask this to know if
                                                    you will fit into the seats. Please purchase an extra seat if needed.</ul> </div></div></div></div> `)
        }
}
displayValues();


////////////////////////////////
