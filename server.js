const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OjQ0pLgfwAAD6ezr9qDS1UumAoGSHVBEzmq4gWl0QpDqtnw7Ao7ZIkVgx2ARLlWQwzgg9J92wCUnIU6zFdXXANG00OHFfHB6H"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  // should this be req.body.products?
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  // window.localStorage.clear();
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );

  // clear the local storage after succesful payment?
  // window.localStorage.clear();
});

app.listen(4000, () => console.log("Listening on port 4000!"));
