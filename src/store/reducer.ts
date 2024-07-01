const inintstate = {
  num: 20,
};
function reducer(state = inintstate, action: { type: string; val: number }) {
  const newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add":
      newstate.num += action.val;
      break;
  }

  return newstate;
}
export default reducer;
