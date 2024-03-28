import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);
    console.log("発火しました");
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if(res.data) {
        showMessage({ title:"ログインしました", status:"success" })
        navigate("/home");
      } else {
        showMessage({ title:"ユーザーが見つかりません", status:"error" })
      }
    })
    .catch(() => showMessage({ title:"ログインできませんでした", status:"error" }))
    .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return  { login, loading };
}
