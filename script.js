// Make sure sandbox environment is not set
 Paddle.Environment.set("sandbox");  // Remove or comment this out

Paddle.Initialize({
  token: "test_55021007d1a225b943ad95b21fe",  // Replace with your live Paddle token
  eventCallback: function(data) {
    console.log(data);
    if (data.name === "checkout.closed" && data.data.status === "completed") {
      displayJSONData(data);  // Handle checkout data
    }
  }
});

let itemsList = [
  {
    priceId: "pri_01hw98twdqh02j7ngjjv12edj3",  // Replace with the actual live price ID
  }
]; 

let customerInfo = {
  email: "lasttestuser1234@gmail.com",
  name: "Last TestUser",
  address: {
    first_line: "123 Main St" 
  }
};

// Open checkout
function openCheckout(items, customer) {
  Paddle.Checkout.open({
    items: items,
    customer: customer
  });
}

// Function to display JSON data from the checkout event (e.g., after purchase)
function displayJSONData(data, parentKey = "") {
  for (let key in data) {
    if (typeof data[key] === 'object' && data[key] !== null) {
      displayJSONData(data[key], `${parentKey}${key}.`);
    } else {
      const fullKey = parentKey + key;
      document.getElementById("paddle_response").innerHTML += `<p><strong>${fullKey}:</strong> ${data[key]}</p>`;
    }
  }
}