import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
import { primaryColors, fontSizes, animationSpeeds } from "../context/SettingsThemes";

export default function Settings(){
    const { settings, settingsActions } = useContext(GlobalContext);

    const [theme, setTheme] = useState("dark");
    const [primaryColor, setPrimaryColor] = useState(0);
    const [fontSize, setFontSize] = useState(1);
    const [animationSpeed, setAnimationSpeed] = useState(1);


    useEffect(() => {
        setTheme(settings["--background-color"] === '#fff' ? "light" : "dark")
        setPrimaryColor(settings["primaryColorNumber"]);
        setFontSize(settings["fontSizeNumber"])
        setAnimationSpeed(settings["animationSpeedNumber"])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option dark" onClick={() => changeThemeNumber(1)}>
                        { theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        ) }
                    </div>
                    <div className="option light" onClick={() => changeThemeNumber(0)}>
                        { theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred color</h2>
                <div className="options-container">
                    { primaryColors.map((color, i) => (
                        <div key={i} className="option light" style={{backgroundColor: color}} onClick={() => changeColorNumber(i)}>
                            { primaryColor === i && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            ) }
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font size</h2>
                <div className="options-container">
                    { fontSizes.map((size, i) => (
                        <button key={i} className="btn" onClick={() => changeFontSize(i)}>
                            {size.title}
                            { fontSize === i && <span><FontAwesomeIcon icon={faCheck} /></span> }
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation speed</h2>
                <div className="options-container">
                    { animationSpeeds.map((speed, i) => (
                        <button key={i} className="btn" onClick={() => changeAnimationSpeed(i)}>
                            {speed.title}
                            { animationSpeed === i && <span><FontAwesomeIcon icon={faCheck} /></span> }
                        </button>
                    ))}
                </div>
            </div>
            
        </div>
    );

    function changeThemeNumber(num){
        setTheme(num === 0 ? "light" : "dark")
        settingsActions.changeTheme(num)
    }

    function changeColorNumber(num){
        setPrimaryColor(num)
        settingsActions.changeColor(num) 
    }

    function changeFontSize(num){
        setFontSize(num)
        settingsActions.changeFontSize(num) 
    }

    function changeAnimationSpeed(i){
        setAnimationSpeed(i)
        settingsActions.changeAnimationSpeed(i);
    }
}