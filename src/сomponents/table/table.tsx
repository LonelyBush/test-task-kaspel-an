import { Table } from 'antd';
import { useState } from 'react';
import { generateTableColumns } from './columns';

const dataSource = [
  {
    key: '1',
    id: 1,
    name: 'Mike',
    date: '16-04-2023',
    amount: 10000,
  },
  {
    key: '2',
    id: 2,
    name: 'John',
    date: '17-04-2023',
    amount: 20000,
  },
  {
    key: '3',
    id: 3,
    name: 'Mark',
    date: '18-04-2023',
    amount: 15000,
  },
];

export const TablePage = () => {
  const [data, setData] = useState(dataSource);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setData(newData);
  };
  const handleEdit = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setData(newData);
  };

  return (
    <Table
      dataSource={data}
      columns={generateTableColumns({
        mainCols: [
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 100,
          },
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
