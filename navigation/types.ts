export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Settings: { name?: string } | undefined;
};