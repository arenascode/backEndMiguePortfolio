import formService from "../services/form.service.js";

export async function handlePostForm(req, res, next) {
try {
  const result = await formService.handleMessage(req.body);
  res.json(result);
} catch (error) {
  console.log(error.details);
  res.status(400).json(error.details)
}
}