import { create } from "zustand";
import { createAuthSlice } from "./authSlice";
import { createChatSlice } from "./chatSlice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createChatSlice(...a),
}));