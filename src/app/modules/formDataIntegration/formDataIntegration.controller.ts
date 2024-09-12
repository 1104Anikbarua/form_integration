import httpStatus from 'http-status';
import { handleSendResposne } from '../../utlis/sendResponse.utlis';
import { handleAsyncTryCatch } from '../../utlis/tryCatch.utlis';

// add form
const addForm = handleAsyncTryCatch(async (req, res) => {
  console.log(req.body);
  const result = await formServices.addForm(req.body);
  handleSendResposne(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Result retrieve successfully',
    data: result,
  });
});

export const formController = {
  addForm,
};
