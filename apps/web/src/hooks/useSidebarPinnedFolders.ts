import {
  EMPTY_PINNED_FOLDERS,
  PinnedFoldersState,
  updatePinnedFolders,
} from "../sidebarPinnedFolders";
import { useLocalStorage } from "./useLocalStorage";

export function useSidebarPinnedFolders() {
  const [state, setState] = useLocalStorage(
    "t3code:sidebar:pinned-folders:v1",
    EMPTY_PINNED_FOLDERS,
    PinnedFoldersState,
  );
  const dispatch = (action: Parameters<typeof updatePinnedFolders>[1]) =>
    setState((current) => updatePinnedFolders(current, action));
  return { state, dispatch };
}
