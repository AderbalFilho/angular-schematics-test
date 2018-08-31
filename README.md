# Angular Schematics

This repository is a test repository used to generate angular code and initially followed this tutorial: https://www.softwarearchitect.io/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx

### Getting Started With Schematics

If you want to modify the project, remember to globally install schematics and get dependencies:
```
npm i
npm i -g @angular-devkit/schematics-cli
```

And build it before use:
```
npm run build
```

### Testing project

First initiate a new project:
```
ng new new-project
```

Then enter in node_modules folder inside new-project and paste the "creator" folder there. If you have a node_module folder or package-lock.json file, delete them.

You can now try the following commands to create components with or without a service:
```
ng g creator:default *projectName*
ng g creator:default *projectName* --defaultService
ng g creator:other *projectName*
ng g creator:other *projectName* --otherService
```
