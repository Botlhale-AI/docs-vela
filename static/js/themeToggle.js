/**
 * Theme Toggle with Double-Click Fix
 */

(function() {
    'use strict';

    const ThemeManager = {
        currentTheme: null,
        isTransitioning: false,
        lastClickTime: 0,
        
        init() {
            this.detectCurrentTheme();
            this.setupEventListeners();
            this.enhanceToggleButton();
        },
        
        detectCurrentTheme() {
            try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
                    this.currentTheme = storedTheme;
                } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    this.currentTheme = prefersDark ? 'dark' : 'light';
                }
                
                this.applyTheme(this.currentTheme, false);
            } catch (error) {
                this.currentTheme = 'light';
                this.applyTheme('light', false);
            }
        },
        
        applyTheme(theme, saveToStorage = true) {
            if (this.isTransitioning) {
                return;
            }
            
            this.isTransitioning = true;
            
            try {
                document.documentElement.setAttribute('data-theme', theme);
                this.currentTheme = theme;
                
                if (saveToStorage) {
                    localStorage.setItem('theme', theme);
                }
                
                this.updateToggleButton(theme);
                
                const event = new CustomEvent('themeChanged', {
                    detail: { theme: theme }
                });
                document.dispatchEvent(event);
                
            } catch (error) {
                // Silent error handling
            } finally {
                setTimeout(() => {
                    this.isTransitioning = false;
                }, 150);
            }
        },
        
        toggleTheme() {
            if (this.isTransitioning) {
                return;
            }
            
            const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.applyTheme(newTheme, true);
        },
        
        updateToggleButton(theme) {
            const toggleButton = document.querySelector('.toggleButton_gllP, [class*="toggleButton"]');
            if (!toggleButton) {
                return;
            }
            
            toggleButton.disabled = false;
            toggleButton.classList.remove('toggleButtonDisabled_aARS');
            
            const isLight = theme === 'light';
            toggleButton.setAttribute('aria-label', 
                `Switch between dark and light mode (currently ${theme} mode)`);
            toggleButton.setAttribute('title', 
                `Switch between dark and light mode (currently ${theme} mode)`);
            
            const lightIcon = toggleButton.querySelector('.lightToggleIcon_pyhR');
            const darkIcon = toggleButton.querySelector('.darkToggleIcon_wfgR');
            
            if (lightIcon && darkIcon) {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'none';
                
                if (isLight) {
                    lightIcon.style.display = 'block';
                } else {
                    darkIcon.style.display = 'block';
                }
            } else {
                const icon = toggleButton.querySelector('svg');
                if (icon) {
                    icon.className = isLight ? 'lightToggleIcon_pyhR' : 'darkToggleIcon_wfgR';
                    icon.style.display = 'block';
                }
            }
        },
        
        enhanceToggleButton() {
            const waitForButton = () => {
                const toggleButton = document.querySelector('.toggleButton_gllP, [class*="toggleButton"]');
                if (!toggleButton) {
                    setTimeout(waitForButton, 100);
                    return;
                }
                
                const newButton = toggleButton.cloneNode(true);
                toggleButton.parentNode.replaceChild(newButton, toggleButton);
                
                newButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    
                    const now = Date.now();
                    
                    if (this.isTransitioning) {
                        return;
                    }
                    
                    if (now - this.lastClickTime < 200) {
                        return;
                    }
                    
                    this.lastClickTime = now;
                    this.toggleTheme();
                });
                
                newButton.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        this.toggleTheme();
                    }
                });
                
                newButton.disabled = false;
                newButton.classList.remove('toggleButtonDisabled_aARS');
            };
            
            waitForButton();
        },
        
        setupEventListeners() {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(newTheme, false);
                }
            });
            
            window.addEventListener('storage', (e) => {
                if (e.key === 'theme' && e.newValue) {
                    this.applyTheme(e.newValue, false);
                }
            });
            
            document.addEventListener('themeChanged', (e) => {
                if (e.detail && e.detail.theme) {
                    this.currentTheme = e.detail.theme;
                    this.updateToggleButton(e.detail.theme);
                }
            });
        }
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            ThemeManager.init();
        });
    } else {
        ThemeManager.init();
    }
    
    window.ThemeManager = ThemeManager;
})();
