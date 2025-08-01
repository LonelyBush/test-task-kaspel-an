import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ButtonIcon } from '../button/ButtonIcon/ButtonIcon';
import { Flex, type TableColumnsType } from 'antd';
import type { RowData } from '../../store/slices/tableDataSlices';

interface GenerateTableColumnsProps {
  mainCols: TableColumnsType<RowData>;
  deleteAction: (key: React.Key) => void;
  editAction: (key: React.Key) => void;
}

export const generateTableColumns = ({
  mainCols,
  deleteAction,
  editAction,
}: GenerateTableColumnsProps): TableColumnsType<RowData> => {
  return [
    ...mainCols,
    {
      title: 'Действие',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <Flex gap="small">
          <ButtonIcon
            onClick={() => editAction(record.key)}
            icon={<EditOutlined />}
          />
          <ButtonIcon
            onClick={() => deleteAction(record.key)}
            icon={<DeleteOutlined />}
            color="danger"
          />
        </Flex>
      ),
    },
  ];
};
