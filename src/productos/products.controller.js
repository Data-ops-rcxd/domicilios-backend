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
    const document = await productsModel.findOne({ _id: id, isDisable: false });
    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getproducts(req, res) {
  try {
    const cat = req.query.category;
    const rest = req.query.restaurant;
    const query = { isDisable: false };
    if (rest) {
      query.restaurant = rest;
    }
    if (cat) {
      query.category = cat;
    }
    const document = await productsModel.find(query);
    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function UpdateProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productsModel.findOneAndUpdate(
      { _id: id, isDisable: false },
      req.body,
      { runValidators: true }
    );
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function DeleteProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productsModel.findByIdAndUpdate(id, {
      isDisable: true,
    });
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
