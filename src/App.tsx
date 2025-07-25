import { Flex, Modal } from 'antd';
import './App.css';
import { TablePage } from './сomponents/table/table';
import { useState } from 'react';
import { ButtonPrimary } from './сomponents/button/ButtonPrimary/ButtonPrimary';
import { FormInput } from './сomponents/form/form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Добавить строку
          </ButtonPrimary>
        </Flex>
        <TablePage />
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
