const chalk = require('chalk');

const options = {
    file: 'dist/ng-interview.tgz',
    gzip: true,
    filter: (path) => (!path.includes('node_modules') && !path.includes('dist'))
};

require('tar')
    .c(options, ['.'])
    .then(_ => {
        console.log(chalk.green('Votre exercice a bien été archivé.'));
        console.log(chalk.cyan(`Veuillez maintenant transmettre le fichier ${chalk.white.bold('dist/ng-interview.tgz')} à votre point de contact HUG.`));
        console.log(chalk.cyan(`Merci.\n`));
    });
