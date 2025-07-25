import { Modal } from 'antd';

interface ModalFormProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const ModalForm = ({
  isModalOpen,
  handleOk,
  handleCancel,
}: ModalFormProps) => {
  return (
    <Modal
      title="Введите данные"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Row</p>
      <p>Row</p>
    </Modal>
  );
};
