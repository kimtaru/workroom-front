const {
  createActions,
  handleActions,
} = require('redux-actions');

const prefix = 'workroom-front/sider';

export const {
  activeHome,
  activeReservation,
  activeTest,
} = createActions(
  'ACTIVE_HOME',
  'ACTIVE_RESERVATION',
  'ACTIVE_TEST',
  {
    prefix,
  },
);

const initialState = {
  home: false,
  reservation: false,
  test: false,
};

const reducer = handleActions(
  {
    ACTIVE_HOME: () => ({
      ...initialState,
      home: true,
    }),
    ACTIVE_RESERVATION: () => ({
      ...initialState,
      reservation: true,
    }),
    ACTIVE_TEST: () => ({
      ...initialState,
      test: true,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;
