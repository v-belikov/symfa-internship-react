import { ModalProps } from 'antd';

export interface IAddEditModalProps<TItem extends Record<string, any> = any>
  extends Omit<ModalProps, 'onOk'> {
  modalType: 'add' | 'edit';
  item?: TItem;
  onOk?: (item?: TItem) => void | Promise<void>;
}
