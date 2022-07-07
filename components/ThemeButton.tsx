import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function ThemeButton() {
    const [theme, setTheme] = useState<string>("dark-theme");

    function changeTheme(themeName : string) {
        localStorage.setItem('theme', themeName);
        setTheme(themeName);
        document.documentElement.className = themeName;
    }
    
    function keepThemeOnStart() {
      if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'dark-theme') {
          changeTheme('dark-theme');
        } else if (localStorage.getItem('theme') === 'light-theme') {
          changeTheme('light-theme')
        }
      } else {
        setTheme('dark-theme')
      }
    }
    
    function toggleTheme() {
        if(theme === 'light-theme')
            changeTheme('dark-theme');
        else 
            changeTheme('light-theme');
    }

    useEffect(() => {
        keepThemeOnStart();
    }, []);

    return (
        <span className="left-button">
            <Image className="icon" height={30} width={30} src='/dark-mode.png' alt="dark-mode-switch-img" onClick={toggleTheme} />
        </span>
    )

}

export { ThemeButton }