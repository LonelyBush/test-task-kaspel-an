import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from './slices/tableDataSlices';

export const store = configureStore({
  reducer: {
    tableData: tableDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
