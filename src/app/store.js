import { configstore } from "firebase-tools/lib/configstore";
import { userReducer } from "./features/userSlice";
export const store = configstore({
  reducer: {
    user: userReducer,
  },
});
