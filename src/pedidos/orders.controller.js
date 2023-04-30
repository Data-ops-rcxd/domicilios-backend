import ordersModel from "./orders.model";

export async function createOrder(req, res) {
  try {
    const product = req.body;
    req.body.isDisable = "false";
    const document = await ordersModel.create(product);
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getOrder(req, res) {
  try {
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getOrders(req, res) {
  try {
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function UpdateOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await ordersModel.findOneAndUpdate(
      { _id: id, isDisable: false },
      req.body,
      { runValidators: true }
    );
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function DeleteOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await ordersModel.findByIdAndUpdate(id, {
      isDisable: true,
    });
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
