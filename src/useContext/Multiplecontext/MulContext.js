import { useState } from "react";
import { ThemeContext, CurrentUserContext } from "./MultipleContext";
import WelcomPanel from "./WelcomPanel";


function MulContext() {

    const [theme, setTheme] = useState('light');
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <div>
        <ThemeContext.Provider value={"algo"}>
        <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        <WelcomPanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>
      </CurrentUserContext.Provider>
        </ThemeContext.Provider>
        </div>
    )
}

export default MulContext