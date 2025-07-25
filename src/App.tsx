import { Flex, Modal } from 'antd';
import './App.css';
import { TablePage } from './сomponents/table/table';
import { useState } from 'react';
import { ButtonPrimary } from './сomponents/button/ButtonPrimary/ButtonPrimary';
import { FormInput } from './сomponents/form/form';
import { useAppDispatch } from './store/hooks';
import { resetKey } from './store/slices/tableDataSlices';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Flex gap="small" wrap vertical>
        <Flex gap="small">
          <h2>Таблица</h2>
          <ButtonPrimary
            type="button"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
              dispatch(resetKey());
            }}
          >
            Добавить строку
          </ButtonPrimary>
        </Flex>
        <TablePage setIsModalOpen={setIsModalOpen} />
      </Flex>
      <Modal
        centered
        title="Введите данные"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <FormInput setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}

export default App;
