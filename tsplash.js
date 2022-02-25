class TeeSplash{






    splashStyle = null
    splash = null
    styles = []




    setStyleAttr(attr,val){
        this.styles.push(
            [attr,val]
        )
        this.assignSplashElemStyles()
    }

    assignSplashElemStyles(){
        this.splashStyle.innerText = ``
        this.styles.forEach(
            style=>{
                this.splashStyle.innerText+=`${this.splashStyle.innerText}${style[0]}:${style[1]};\n\t`
            }
        )
        this.splash.style = this.splashStyle
    }

    createSplashElemStyle(){
        this.splashStyle = document.createElement('style')
        this.assignSplashElemStyles()
    }

    createSplashElem(){
        this.splash = document.createElement('section')
        this.splash.classList('TeeSplash')
        this.createSplashElemStyle()
    }


    constructor(){
        this.createSplashElem()
    }



}