import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  type FormProps,
} from 'antd';
import { ButtonPrimary } from '../button/ButtonPrimary/ButtonPrimary';
import type { Dispatch, SetStateAction } from 'react';

interface FieldType {
  name?: string;
  date?: string;
  amount?: number;
}

export const FormInput = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    message.success('Submit success!');
    setIsModalOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
    message.error('Submit success!');
  };
  return (
    <Form
      name="basic"
      form={form}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Дата"
        name="date"
        rules={[{ required: true, message: 'Пожалуйста, введите дату' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item<FieldType>
        label="Cумма"
        name="amount"
        rules={[{ required: true, message: 'Пожалуйста, введите сумму' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item label={null}>
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </Form.Item>
    </Form>
  );
};
