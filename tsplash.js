class TeeSplash{


    splashStyle = null
    splash = null
    styles = [
        ['position','absolute'],
        ['top','0'],
        ['left','0'],
        ['width','100vw'],
        ['height','100vh'],
        ['display','flex'],
        ['flex-direction','column'],
        ['justify-content','center'],
        ['text-align','center']
    ]
    logoStyles = [
        ['display','flex'],
        ['width','10vw'],
        ['height','20vh'],
        ['background','yellow'],
        ['border-radius','10em'],
        ['margin-left','45%']
    ]
    _splash_type = 'logo' 


    configure(){
        if(this._splash_type === 'logo'){
            this.splashLogo = this.splashLogo && (typeof this.splashLogo != 'undefined') ? this.splashLogo : this.createSplashLogo()
            this.splashLogoStyle = this.splashLogoStyle ? this.splashLogoStyle : this.createSplashLogoStyle() 
        }
    }

    Splash(){
        this.assignSplashElemStyles()
        if(this._splash_type=='logo'){
            this.splash.appendChild(this.splashLogo)
            document.body.appendChild(this.splash)
        }
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

    setLogoStyleAttr(attr,val){
        this.styles.push(
            [attr,val]
        )
        this.assignSplashElemStyles()
    }

    assignSplashElemStyles(){
        this.configure()
        this.splashStyle.innerText = `.TeeSplash{`
        this.styles.forEach(
            style=>{
                this.splashStyle.innerText =`${this.splashStyle.innerText}${style[0]}:${style[1]};\n\t`
            }
        )
        this.splashStyle.innerText += `}`
        if(this._splash_type=='logo'){
            this.assignSplashLogoStyles()
        }
        this.splash.insertBefore(this.splashStyle,this.splash.firstChild)
    }

    assignSplashLogoStyles(){
        this.configure()
        this.splashLogoStyle.innerText = `.TeeSplashLogo{`
        this.logoStyles.forEach(
            style=>{
                this.splashLogoStyle.innerText =`${this.splashLogoStyle.innerText}${style[0]}:${style[1]};\n\t`
            }
        )
        this.splashLogoStyle.innerText += `}`
        this.splash.insertBefore(this.splashLogoStyle,this.splash.firstChild)
    }

    createSplashElemStyle(){
        this.splashStyle = document.createElement('style')
        this.assignSplashElemStyles()
        return this.splashStyle
    }

    createSplashLogoStyle(){
        this.splashLogoStyle = document.createElement('style')
        this.assignSplashLogoStyles()
        return this.splashLogoStyle
    }

    createSplashElem(){
        this.splash = document.createElement('section')
        this.splash.classList.add('TeeSplash')
        this.createSplashElemStyle()
        return this.splash
    }

    createSplashLogo(){
        this.splashLogo = document.createElement('img')
        this.splashLogo.classList.add('TeeSplashLogo')
        this.createSplashLogoStyle()
        return this.splashLogo
    }


    constructor(){
        this.createSplashElem()
    }



}