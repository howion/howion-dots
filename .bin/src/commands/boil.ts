import chalk from 'chalk'
import { boilerplates, plates } from './plates'

export async function boil(boilerplate: string, destination: string) {
    if (!boilerplates.hasOwnProperty(boilerplate)) {
        console.log(chalk.red(`error: unknown boilerplate '${boilerplate}'`))
        plates()
    }

    const cwd = process.cwd()
}
