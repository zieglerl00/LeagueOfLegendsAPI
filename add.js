function setDrink(user_id) {

    let quantity = parseInt(document.getElementById('drink-quantity').value, 10);
    if(isNaN(quantity)){
        quantity = 1
    }
    else if (quantity == 0) {
        return;
    }
    let data = new FormData();
    data.append("selected_drink", drinkId);
    data.append("quantity", quantity);

    fetch(`/drinks/${user_id}`, {
        method: "POST", body: data
    }).then(response => response.json()).then(data => {
        location.reload()
        let addedMessage = document.getElementById("added-message");
        if (data.status === "OK") {
            addedMessage.innerHTML = "success";
            addedMessage.style.color = "green";
        } else {
            addedMessage.innerHTML = "error";
            addedMessage.style.color = "red";
        }
    })
}
