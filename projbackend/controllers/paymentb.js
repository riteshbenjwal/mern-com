const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "5vgrmjqbb5x667yy",
  publicKey: "zsmpmgs7t55y6qpw",
  privateKey: "188a687cd83adca2f28766cbbe81dc5e",
});

exports.getToken = (req, res) => {
	gateway.clientToken.generate({}, (err, response) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.send(response);
		}
	});
}




exports.processPayment = (req, res) => {
	let nonceFromTheClient = req.body.paymentMethodNonce;
	let amountFromTheClient = req.body.amount;
	gateway.transaction.sale(
		{
			amount: amountFromTheClient,
			paymentMethodNonce: nonceFromTheClient,
			options: {
				submitForSettlement: true
			}
		},
		(err, result) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(result);
			}
		}
	);
};