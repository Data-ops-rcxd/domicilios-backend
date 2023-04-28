import Users from "./users.model";

//buscar por id (working)
export async function getUserbyID(req, res) {
  try {
    const filter = req.params.number;
    const value = await Users.findOne({ phone: filter });
    value ? res.status(200).json(value) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//busca por email y contraseña (working)
export async function getUserbyName_pass(req, res) {
  try {
    const { email, pass } = req.params;
    const response = await Users.findOne({ email: email, password: pass });
    response ? res.status(200).json(response) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//crea usuario (working)
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
//actualiza (working)
export async function patchUser(req, res) {
  try {
    const id = req.params.id
    const document = await Users.findByIdAndUpdate(id , req.body , {runValidators: true})
    res.status(200).json("changes applied")
  } catch (err) {
    res.status(200).json(err.message);
  }
}
//"elimina", osea soft delete (working)
export async function deleteUser(req, res) {
  try {
    const id = req.params.id
    await Users.findByIdAndUpdate(id ,{isDisable: true})
    res.status(200).json("changes applied")
  } catch (err) {
    res.status(200).json(err.message);
  }
}
