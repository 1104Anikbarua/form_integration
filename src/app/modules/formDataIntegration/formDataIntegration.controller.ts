import httpStatus from 'http-status';
import { handleSendResposne } from '../../utlis/sendResponse.utlis';
import { handleAsyncTryCatch } from '../../utlis/tryCatch.utlis';

// add form
const addForm = handleAsyncTryCatch(async (req, res) => {
  const result = await formServices.addForm();
  handleSendResposne(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '',
    data: result,
  });
});

export const formController = {
  addForm,
};
