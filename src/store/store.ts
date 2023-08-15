import { configureStore } from '@reduxjs/toolkit';

import * as slices from './slices';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    todoSlice: slices.todoReducer
  }
});
