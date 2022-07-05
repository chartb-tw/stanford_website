function calcTotalCost (){

    let carForm = document.forms["car-customise"];

    let totalToPay = Number(carForm["config"].value) + Number(carForm["factory"].value);

    totalToPay += ( carForm["stereo"].checked ? Number(carForm["stereo"].value) : 0);
    totalToPay += ( carForm["security"].checked ? Number(carForm["security"].value) : 0);
    totalToPay += ( carForm["mirror"].checked ? Number(carForm["mirror"].value) : 0);

    carForm["total-cost"].value = totalToPay.toLocaleString("en-US", {style:"currency", currency:"USD"});;
}

function selectCarColor(){
    let carColorForm = document.forms["colorcar"]['car-color'];
    let carImage = document.querySelector("#car-img");

    switch (carColorForm.value){
        case "red":
            carImage.setAttribute("src", "carpics/car-red.png");
            break;
        case "blue":
            carImage.setAttribute("src", "carpics/car-blue.png");
            break;
        case "silver":
            carImage.setAttribute("src", "carpics/car-silver.png");
            break;
        case "white":
            carImage.setAttribute("src", "carpics/car-white.png");
            break;
        case "black":
            carImage.setAttribute("src", "carpics/car-black.png");
            break;
        default:
            console.log("Psst, I think you haven't coded me correctly ;)");
            break; // isn't really needed here, but may as well keep it
    }
}