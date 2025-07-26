import { Input, Table } from 'antd';
import { generateTableColumns } from './columns';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteRow, updateKey } from '../../store/slices/tableDataSlices';
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useDebounceValue } from '../../hooks/useDebounceValue';

export const TablePage = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchText, setSearchText] = useState('');
  const data = useAppSelector((state) => state.tableData.data);
  const dispatch = useAppDispatch();

  const handleDelete = (key: React.Key) => {
    dispatch(deleteRow(key));
  };
  const handleEdit = (key: React.Key) => {
    dispatch(updateKey(key));
    setIsModalOpen(true);
  };

  const debounced = useDebounceValue(searchText);

  const filteredData = useMemo(() => {
    if (!debounced) {
      return data;
    }
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(debounced.toLowerCase()),
      ),
    );
    return filtered;
  }, [data, debounced]);

  return (
    <>
      <Input
        placeholder="Поиск по таблице"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Table
        dataSource={filteredData}
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
    </>
  );
};
