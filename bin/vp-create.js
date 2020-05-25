#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')

program.usage('[project-name]')
program.parse(process.argv)

if (program.args.length < 1) {

    console.log(chalk.white('Usage: vp create [app-name]\n'))

    console.log(chalk.red('Missing required argument'), chalk.yellow('[app-name].'))
    return
}

let projectName = program.args[0]

console.log(chalk.white('\n Start generating... \n'))
// 出现加载图标
const spinner = ora("Downloading...");
spinner.start();
// 执行下载方法并传入参数
download (
    "zengfan0605/vant-px2rem",
    projectName,
    err => {
        if (err) {
            spinner.fail();
            console.log(chalk.red(`Generation failed. ${err}`))
            return
        }
        // 结束加载图标
        spinner.succeed();
        console.log(chalk.green('\n Generation completed!'))
        console.log('\n To get started')
        console.log(`\n    cd ${projectName}`)
        console.log('\n    npm install')
        console.log('\n    npm run serve')
    }
)