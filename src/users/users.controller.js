
import Users from './users.model';

export async function getUser(req,res) {
  const users = await Users.find(req.query);
  res.status(200).json(users);
}

export async function createUser(req, res) {
  try {
    const { name } = req.body;
    const user = new Users({ name });
    const resultado = await user.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchUser(req, res) {
  res.status(200).json({});
}

export async function deleteUser(req, res) {
  res.status(200).json({});
}