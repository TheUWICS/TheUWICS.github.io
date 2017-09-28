# UWICS Homepage

## Requirements
| Requirement    |How to get                        |
|----------------|----------------------------------|
| Git            | https://git-scm.com/             |
| GitHub Desktop | https://desktop.github.com/      |
| Node           | https://nodejs.org               |
| Bower          | ```npm install -g bower```       |
| Polymer-CLI    | ```npm install -g polymer-cli``` |

## Setup
Open the repository in the terminal and run the following command
```
bower install
```

## Viewing Application
```
polymer serve
```

## Building instructions
Travis CI builds the webpage on each commit to the dev branch.

Due to the implementation of the deploy script the bower_components folder required for the site is not copied so the following needs to be done.

| Instruction | Command |
| ----------- | ------- |
|Clone the repository to a new folder | git checkout https://github.com/TheUWICS/TheUWICS.github.io.git uwics-master |
| Copy the bower_components folder from dev to master|  | 
| Open terminal in the repository  | |
| Change to the master branch | git checkout master |
| Add the files | git add -f bower_components |
| Commit the bower_components | git commit -m "Adding Bower Components" |
| Push the commit | git push |
| Verify that the bower_components is in the GitHub repo and the site loads correctly | |
