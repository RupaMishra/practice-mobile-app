import React from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import LoadingOverlay from "../loaders/LoadingOverlay";
import useTheme from "../../theme/useTheme";

const ScrollScreen = ({
  onRefresh,
  isRefreshing,
  children,
  isLoading,
  loadingMsg,
  style,
}) => {
  return (
    <ScrollView
      refreshControl={
        onRefresh && (
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        )
      }
      style={[styles.rootContainer, style]}
    >
      <View style={{ height: Dimensions.get("window").height }}>
        <LoadingOverlay
          isLoading={isLoading}
          message={loadingMsg ? loadingMsg : "Loading"}
        />
        {children && children}
      </View>
    </ScrollView>
  );
};

const UnScrollScreen = ({ children, isLoading, loadingMsg, style }) => {
  return (
    <View style={[styles.rootContainer, style]}>
      <LoadingOverlay
        isLoading={isLoading}
        message={loadingMsg ? loadingMsg : "Loading"}
      />
      {children && children}
    </View>
  );
};

const Screen = ({
  children,
  onRefresh,
  isRefreshing,
  preset,
  isLoading,
  loadingMsg,
  style,
}) => {
  const color = useTheme();
  const bgColor = {
    backgroundColor: color.background.default,
  };
  return preset === "scroll" ? (
    <ScrollScreen
      isRefreshing={isRefreshing && isRefreshing}
      onRefresh={onRefresh && onRefresh}
      isLoading={isLoading && isLoading}
      loadingMsg={loadingMsg && loadingMsg}
      style={[style, bgColor]}
    >
      {children && children}
    </ScrollScreen>
  ) : (
    <UnScrollScreen
      isLoading={isLoading && isLoading}
      loadingMsg={loadingMsg && loadingMsg}
      style={[style, bgColor]}
    >
      {children && children}
    </UnScrollScreen>
  );
};

export default Screen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
