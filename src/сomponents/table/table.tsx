import { Table } from 'antd';
import { generateTableColumns } from './columns';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  deleteRow,
  updateKey,
  type RowData,
} from '../../store/slices/tableDataSlices';
import type { Dispatch, SetStateAction } from 'react';

export const TablePage = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const data = useAppSelector((state) => state.tableData.data);
  const dispatch = useAppDispatch();

  const handleDelete = (key: React.Key) => {
    dispatch(deleteRow(key));
  };
  const handleEdit = (data: RowData) => {
    dispatch(updateKey(data.key));
    setIsModalOpen(true);
  };

  return (
    <Table
      dataSource={data}
      columns={generateTableColumns({
        mainCols: [
          {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            width: 200,
            sorter: (a, b) => a.name.length - b.name.length,
          },
          {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
            defaultSortOrder: 'descend',
            width: 200,
            responsive: ['sm'],
            sorter: (a, b) =>
              new Date(a.date).getTime() - new Date(b.date).getTime(),
          },
          {
            title: 'Cумма',
            dataIndex: 'amount',
            key: 'amount',
            defaultSortOrder: 'descend',
            width: 200,
            sorter: (a, b) => a.amount - b.amount,
          },
        ],
        deleteAction: handleDelete,
        editAction: handleEdit,
      })}
      pagination={false}
    />
  );
};
