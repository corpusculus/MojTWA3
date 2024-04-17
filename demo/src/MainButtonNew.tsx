import { Button, Form, Input, Typography } from 'antd'; // Removed unused Switch
import { FC, useState } from 'react';
import {
  MainButton,
  MainButtonProps,
} from '@vkruglikov/react-telegram-web-app';

const MainButtonNew: FC<{
  initialValues?: Partial<MainButtonProps>;
}> = ({ initialValues }) => {
  const [buttonState, setButtonState] = useState<MainButtonProps>({
    text: 'BUTTON TEXT', // Text will still be displayed in MainButton
    progress: false,
    disable: false,
    ...initialValues,
  });

  const onFinish = (values: any) => setButtonState(values);

  return (
    <>
      <Typography.Title level={3}>MainButton</Typography.Title>
      <Form
        labelCol={{ span: 6 }} // Labels still useful for clarity
        name="MainButtonDemo"
        layout="horizontal"
        initialValues={buttonState}
        onFinish={onFinish}
        autoComplete="off"
      >
      </Form>
      <div>
        <MainButton {...buttonState} />
      </div>
    </>
  );
};

export default MainButtonNew;
