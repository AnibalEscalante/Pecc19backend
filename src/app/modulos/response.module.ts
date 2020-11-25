import { Request, Response } from "express";


function success(req: Request, res: Response, message: any, status?: number) {
  res.status(status || 200)
    .send({
      error: "",
      status: status || 200,
      message: message,
    });
}

function error(req: Request, res: Response, message: any, status?: number) {
  res.status(status || 500)
  .send({
    error: message,
    status: status || 500,
    message: "",
  });
}
export default { success, error };