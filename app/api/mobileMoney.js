const subscriptionKey = "2cbdb1125af443a69628a8df92c751d2";
const uuid = "57ff944c-2b30-4f02-97f5-be0e40be";

export function requestPayment(userId, message, amount, paymentId) {
    return new Promise((resolve, reject) => {
        authenticateMobileMoney().then(bearer => {
            var payload = {
                "amount": `${amount}`,
                "currency": "EUR",
                "externalId": `${paymentId}`,
                "payer": {
                    "partyIdType": "MSISDN",
                    "partyId": `${userId}`
                },
                "payerMessage": message,
                "payeeNote": message
            }
            var payloadString = JSON.stringify(payload);
            var id = uuid + `${(Math.floor(Math.random() * 8999) + 1000)}`;
            var headers = {
                'Content-Type': 'application/json',
                'X-Reference-Id' : id,
                'X-Target-Environment' : 'sandbox',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Authorization': "Bearer " +bearer,
                'cache-control' : 'no-cache'
            };
            var data = {
                method: 'POST',
                headers: headers,
                body: payloadString,
            }
            fetch('https://ericssonbasicapi2.azure-api.net/collection/v1_0/requesttopay', data)
                .then((response) => {
                    resolve();
                })
        })
    })
}

function authenticateMobileMoney() {
    return new Promise((resolve, reject) => {
        fetch('https://ericssonbasicapi2.azure-api.net/collection/token/', {
            method: 'POST',
            headers: {
                'Authorization': "Basic ZTliNDhhMDUtZTRiMC00MDMyLWI2MWQtY2U3ZWUwOTY0NGU2OmYyM2I2MzNiODIzMTRkNmJiYWZkMWQ0NDZhZDdmMTU0",
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey
            }
        })
            .then((response) => response.json())
            .then((result) => {
                resolve(result["access_token"]);
            })
    });
}
