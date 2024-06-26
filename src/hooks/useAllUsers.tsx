import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getAllUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch(() => {
      showMessage({title: "ユーザー取得に失敗しました", status: "error"})
    })
    .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getAllUsers, loading, users }
}
