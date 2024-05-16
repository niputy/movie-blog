import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { settingsActions } from "../../context/SettingsReducer";

export default function Container({ children }){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(settingsActions.updateSettingsStorage())
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
    return (
        <div className="container main">
            {children}
        </div>
    )
}