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

Then enter in node_modules folder inside new-project and paste this project folder (named as "creator") there. If you have a node_module folder or package-lock.json file, delete them.

You can now try the following commands to create components with or without a service:
```
ng g creator:default insert-your-component-name
ng g creator:default insert-your-component-name --defaultService
ng g creator:other insert-your-component-name
ng g creator:other insert-your-component-name --otherService
```

If you use "-" to separate your project name (which is the correct method), remember to rename the variables in your service. This (maybe) will be fixed in future versions.
