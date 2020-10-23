import { configureStore } from '@reduxjs/toolkit';

import {
  counterReducer
} from './features/slices';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
