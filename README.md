# widgets-mini

This is a small __react__ project using __JSPM__.  

## installation

### requirements
node >= 4.X

### installing dependencies

install node modules:
```
npm install
```

then install __JSPM__ dependencies:
```
$(npm bin)/jspm install
```

## architecture

`node_modules` and `jspm_packages` are located at the root of the project, along with all the __JSPM__ configuration files.  

The source code is in `/client`, organized by (_JSPM_ configured) package.  
In each package, there are `index.html` and `entry.js` files, ready to be served for testing.  

There is currently only one package: `login`.  

## commands
- `npm start`: launch a node express server  
- `npm run build --name=login`: build package 'login'  
- `npm run bundle --name=login`: bundle package 'login'  
- `npm run watch --name=login`: bundle package 'login' on watch  

