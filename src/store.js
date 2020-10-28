import { configureStore } from '@reduxjs/toolkit';

import {
  counterReducer,
  userReducer,
} from './features/slices';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
