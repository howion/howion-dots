import chalk from 'chalk'
import { nextjs } from '../boilerplates/nextjs'
import { node } from '../boilerplates/node'

export const boilerplates = {
    nextjs: {
        desc: 'next@13 (swc) + ts + sass + stylelint + postcss',
        code: 'nextjs',
        handle: nextjs,
    },
    node: {
        desc: 'esbuild + ts',
        code: 'node',
        handle: node
    }
} as const

export function plates() {
    console.log('\nAvailable boilerplates:')

    for (const plate of Object.values(boilerplates)) {
        console.log(`  * ${chalk.bold(plate.code)}: ${chalk.gray(plate.desc)}`)
    }

    console.log('')
}
