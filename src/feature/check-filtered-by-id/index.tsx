import { FC } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { isProductItemChecked, setToggleCheckedById } from "entities/product";

export const CheckFilteredById: FC<{ id: string }> = ({ id }) => {
  const isChecked = isProductItemChecked(id);

  const dispatch = useDispatch();
  const toggleChecked = () => {
    dispatch(setToggleCheckedById(id));
  };

  return <Checkbox onChange={toggleChecked} checked={isChecked} />;
};
