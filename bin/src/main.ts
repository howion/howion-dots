import pjson from '../../package.json'
import { Command } from 'commander'
import { boil } from './commands/boil'
import { plates } from './commands/plates'
import chalk from 'chalk'

const bin = new Command()

bin
    .name(pjson.name)
    .description(pjson.description)
    .version(pjson.version, '-v, --version', 'output the current version')
    .configureOutput({
        outputError: (str, write) => write(chalk.red(str))
    })

bin
    .command('boil')
    .description('Create a new folder and populate it with the selected boilerplate. This command is interactive.')
    .argument('<boilerplate>', 'boilerplate to use')
    .argument('<destination>', 'folder to populate')
    .action(boil)

bin
    .command('update')
    .description('Create a new folder and populate it with the selected boilerplate. This command is interactive.')
    .argument('<boilerplate>', 'boilerplate to use')
    .argument('<destination>', 'folder to populate')
    .action(boil)

bin
    .command('plates')
    .description('List available boilerplates.')
    .action(plates)

bin.parse()
