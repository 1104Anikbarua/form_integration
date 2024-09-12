const addForm = async (payload: any[]) => {
  const answers = payload;
  // const formName = answers[0]?.t;
  const isActive = answers[1]?.c[0]?.t;
  console.log(isActive);
  return {
    // formName,
    isActive,
  };
};
const formServices = {
  addForm,
};

interface IAnswers {
  answer: [
    {
      q: string;
      t: string;
    },
    {
      q: string;
      c: [
        {
          t: string;
          v: string;
        },
      ];
    },
  ];
}
