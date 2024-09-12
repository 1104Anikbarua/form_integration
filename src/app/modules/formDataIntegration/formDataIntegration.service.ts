const addForm = async (payload: any) => {
  const answers = payload;
  const formName = answers[0]?.t;
  const isActive = answers[1]?.c[1]?.t;
  return { formName, isActive };
};
const formServices = {
  addForm,
};
