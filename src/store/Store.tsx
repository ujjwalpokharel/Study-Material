import { create } from "zustand";
export interface storedata {
  navigationpop: boolean;
  setNavigationpop(data: boolean): void;
}
const useStoreData = create<storedata>((set) => ({
  navigationpop: false,
  setNavigationpop: (data: boolean) =>
    set(() => ({
      navigationpop: data,
    })),
}));
export default useStoreData;
