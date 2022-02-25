# TeeSplash

//Helps you automate waiting screens on your webpage...... | Aide à automatiser la génération de Splash-Screen sur vos sites webs..




# DOWNLOAD

<a href='https://github.com/dev0ps221/teesplash/archive/refs/heads/main.zip' download='true' target='_blank' >Download TeeSplash Here</a>



# DOCS
# HOW TO | COMMENT FAIRE ?


## Including the script in your page || Inclure le script sur votre page

*First include de TeeSplash class using the script tag || Commencer par inclure le script contenant la classe via la balise script*

- When downloaded the library | Lorsque nous avons téléchargé le module
```
    <script src='tsplash.js'>
    </script> 
```
- When using it remotely  | Lorsqu'on veut l'utiliser à distance (CDN)
```
    <script src='https://cdn.jsdelivr.net/gh/dev0ps221/teesplash/tsplash.js'>
    </script> 
```

## Creating a splash element || Créer un élément teesplash sur la page

```
    const Splash = new TeeSplash()
```


## Assigning a logo to the Splash | Intégrer un logo au Splash

*The __addSplashLogo__ allows us to define the path of the logo used as illustrator || La methode __addSplashLogo__ nous permet de définir l'adresse du logo utilisé comme illustratif*
```
    Splash.addSplashLogo(imgpath) //imgpath is the path to the picture || imgpath est le chemin vers l'image
```



## Displaying the splash newly created || Afficher le splash sur la page

```
    Splash.Splash()
```


## Hiding the splash newly created || Cacher le splash sur la page

```
    Splash.UnSplash()
```
 
