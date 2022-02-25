class TeeSplash{


    splashStyle = null
    splash = null
    styles = [
        ['position','absolute'],
        ['top','0'],
        ['left','0'],
        ['width','100vw'],
        ['height','100vh'],
        ['background','red']
    ]
    _splash_type = 'logo' 


    Splash(){
        this.assignSplashElemStyles()
        document.body.appendChild(this.splash)
    }

    UnSplash(){
        document.body.removeChild(this.splash)
    }

    setStyleAttr(attr,val){
        this.styles.push(
            [attr,val]
        )
        this.assignSplashElemStyles()
    }

    assignSplashElemStyles(){
        this.splashStyle.innerText = `.TeeSplash{`
        this.styles.forEach(
            style=>{
                this.splashStyle.innerText =`${this.splashStyle.innerText}${style[0]}:${style[1]};\n\t`
            }
        )
        this.splashStyle.innerText += `}`
        this.splash.insertBefore(this.splashStyle,this.splash.firstChild)
    }

    createSplashElemStyle(){
        this.splashStyle = document.createElement('style')
        this.assignSplashElemStyles()
    }

    createSplashElem(){
        this.splash = document.createElement('section')
        this.splash.classList.add('TeeSplash')
        this.createSplashElemStyle()
    }


    constructor(){
        this.createSplashElem()
    }



}