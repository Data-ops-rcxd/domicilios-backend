import productsModel from "./products.model";

export async function createProduct(req, res) {
  try {
    const product = req.body;
    req.body.isDisable = "false";
    const document = await productsModel.create(product);
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getProduct(req, res) {
    try {
        const id = req.params.id;
        const document = await productsModel.findOne(id);
        document ? res.status(201).json(document) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
