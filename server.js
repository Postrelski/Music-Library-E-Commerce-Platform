const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OjQ0pLgfwAAD6ezr9qDS1UumAoGSHVBEzmq4gWl0QpDqtnw7Ao7ZIkVgx2ARLlWQwzgg9J92wCUnIU6zFdXXANG00OHFfHB6H"
);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// add this ->
// MIDDLEWARE
const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://shrouded-journey-38552.heroku...",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

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

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// add this ->
const path = require("path");
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
//  add this ->
const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});

// app.listen(4000, () => console.log("Listening on port 4000!"));