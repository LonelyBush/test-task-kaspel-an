import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Key } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface RowData {
  key: Key;
  name: string;
  date: string;
  amount: number;
}

export interface TableState {
  data: RowData[];
  key: Key;
}

const initialState: TableState = {
  key: '',
  data: [
    {
      key: '0',
      name: 'Mike',
      date: '2025-07-13',
      amount: 10000,
    },
    {
      key: '1',
      name: 'John',
      date: '2025-07-15',
      amount: 20000,
    },
    {
      key: '2',
      name: 'Mark',
      date: '2025-07-17',
      amount: 15000,
    },
  ],
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<Omit<RowData, 'id' | 'key'>>) => {
      const newRow = {
        key: uuidv4(),
        ...action.payload,
      };
      state.data = [...state.data, newRow];
    },
    deleteRow: (state, action: PayloadAction<Key>) => {
      const newData = state.data.filter((item) => item.key !== action.payload);
      state.data = newData;
    },
    editRow: (state, action: PayloadAction<RowData>) => {
      state.data = state.data.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
    },
    updateKey: (state, action: PayloadAction<Key>) => {
      state.key = action.payload;
    },
    resetKey: (state) => {
      state.key = '';
    },
  },
});

export const { addRow, deleteRow, editRow, updateKey, resetKey } =
  tableDataSlice.actions;

export default tableDataSlice.reducer;
