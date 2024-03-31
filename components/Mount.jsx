import { View } from "react-native";

const Mount = ({ visible, children }) => {
  if (!visible) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};
export default Mount;
