const { Order, ProductCart } = require("../models/order");

exports.getOrderById = (req, res) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err)
        return res.status(400).json({
          error: "No order found",
        });
      res.json(order);
      next();
    });
};

exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err)
      return res.status(400).json({
        error: "Failed to save order in DB",
      });
    res.json(order);
  });
};

exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found",
        });
      }
      res.json(order);
    });
};

exports.getOrderStatus = (req, res) => {
  return res.json(Order.schema.path("status").enumValues);
};

exports.updateStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update order status",
        });
      }
      res.json(order);
    }
  );
};
