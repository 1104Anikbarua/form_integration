import httpStatus from 'http-status';
import { handleSendResposne } from '../../utlis/sendResponse.utlis';
import { handleAsyncTryCatch } from '../../utlis/tryCatch.utlis';

// add form
const addForm = handleAsyncTryCatch(async (req, res) => {
  // console.log(req.body);
  const formData = req.body;
  if (!formData || !formData.answer || !formData.answer.answers) {
    throw new Error('Missing required form data');
  }
  // Process the form data (example)
  const answers = formData.answer.answers;
  // answers.forEach((answer) => {
  //   console.log(`Question ID: ${answer.q}, Answer: ${answer.t || answer.c}`);
  // });
  const formName = answers[0].t;
  // const isActive=answers[1].
  console.log(formName);
  const result = await formServices.addForm(formName);
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
