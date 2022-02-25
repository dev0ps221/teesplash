# TeeSplash

//Helps you automate waiting screens on your webpage...... | Aide à automatiser la génération de Splash-Screen sur vos sites webs..




# DOWNLOAD

[Download TeeSplash Here](https://raw.githubusercontent.com/dev0ps221/teesplash/1ec90a5984358a016fc329a9f758b2f59281dadf/tsplash.js)



# DOCS
# HOW TO | COMMENT FAIRE ?


## Including the script in your page || Inclure le script sur votre page

*First include de TeeSplash class using the script tag || Commencer par inclure le script contenant la classe via la balise script*
```
    <script src='tsplash.js'>
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
 
