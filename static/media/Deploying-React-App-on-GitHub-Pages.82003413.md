

In this tutorial, I'll show you how to deployed a React app to GitHub Pages. to those of you who don't know GitHub Pages. GitHub pages gives free hosting for static web pages.

## Prerequisites
---
- your React app that you have created using  ``create-react-app``
- Git client


## Steps
---
#### 1. Create a new empty GitHub repo

- For this example, say let's name it ``react-on-github``


#### 2. Install the ``gh-pages`` package as a "dev-dependency" of the app. 

- In your React app directory
        
```
    $ npm install --save-dev gh-pages 
```
   

### 3. Add some properties to the app's ``package.json` file

- At the top level, homepage property.
It's value equals ``"http://{gitUsername}.github.io/{githubRepoName}"``, where `{gitUsername}` is your GitHub username, and `{githubRepoName}` is your GitHub repository name, you have created in step 1.

    For example if your GitHub username is ``mmagdys`` , and your repo name is ``react-on-github``. Your entry will be ike this
    ```
    "homepage": "http://mmagdys.github.io/react-on-github"
    ```
- At the `scripts` property, and 2 sub-properties `predeploy` and `deploy`. as follows

    ```
    "scripts": {
    ...
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }

    ```

### 4. Create Git repo in your React app

- Create git repo in your local app's directory and add your remote GitHub repo in your local repo

```
    $ git init
    $ git remote add origin https://github.com/mmagdys/react-on-github.git
```


### 5. Generate your production build of your React app

```
    $ npm run deploy
```

### 5. Push your source code to master branch

```
    $ git add .
    $ git commit -m "Initial commit"
    $ git push origin master

```

- After this step, your repo contains 2 branches. The `master` branch, which contains the app's source code , and the `gh-pages` branch, which contains a built version of the app.
