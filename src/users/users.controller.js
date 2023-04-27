import Users from "./users.model";

export async function getUserbyID(req, res) {
  try {
    const filter = req.params.number;
    const value = await Users.find({ phone: filter });
    res.status(200).json(value);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getUserbyName_pass(req, res) {
  try {
    const { email, pass } = req.params;
    const response = await Users.find({ email: email, password: pass });
    response ? res.status(200).json(response) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function createUser(req, res) {
  try {
    const user = req.body;
    req.body.isDisable = "false";
    const document = await Users.create(user);
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function patchUser(req, res) {
  try {
    const id = req.params.id
    const document = await Users.findByIdAndUpdate(id , req.body , {runValidators: true})
    res.status(201).json(document)
  } catch (error) {
    res.status(200).json("Error");
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id
    await Users.findByIdAndUpdate(id ,{isDisable: true})
    res.status(201).json("changes applied")
  } catch (error) {
    res.status(200).json("Error");
  }
}
