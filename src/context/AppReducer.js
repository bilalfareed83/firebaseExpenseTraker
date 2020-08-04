export default (state, { type, payload }) => {
  switch (type) {
    case "DElETE_TRANSCATION":
      return {
        ...state,
        transcations: state.transcations.filter((item) => item.id !== payload),
      };
    case "ADD_TRANSCATION":
      return {
        ...state,
        transcations: [payload, ...state.transcations],
      };
    default:
      return state;
  }
};
