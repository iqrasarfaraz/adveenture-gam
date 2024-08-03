#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.yellowBright.bold("     /$/$     |$|$$$$$$$  $          /$|$|$$$$$|$|$     |$|$$$$$$$$$$|$|     |$|$|$$$$ |$|$$$$$ //$$$$$$$      /$/$     |$|$          /$|$||$|$$$$$"));
console.log(chalk.italic.greenBright.bold("    /$/  $    |$|       $  $        /$/|$|     |$| $    |$|   |$|    |$|     |$|$|    )|$|      ||       ||   /$/  $    |$| $        /$/|$||$|"));
console.log(chalk.italic.blueBright.bold("   /$/    $   |$|        $  $      /$/ |$|$$$  |$|  $   |$|   |$|    |$|     |$|$|$$$$ |$|$$$   ||           /$/    $   |$|  $      /$/ |$||$|$$$"));
console.log(chalk.italic.magentaBright.bold("  /$/!!!!!!$  |$|        $   $    /$/  |$|$$$  |$|   $  |$|   |$|    |$|     |$|$| $   |$|$$$   ||     $$   /$/!!!!!!$  |$|   $    /$/  |$||$|$$$"));
console.log(chalk.italic.redBright.bold(" /$/        $ |$|       $     $  /$/   |$|     |$|    $ |$|   |$|    |$|     |$|$|  $  |$|      ||       ||/$/        $ |$|    $  /$/   |$||$|"));
console.log(chalk.italic.blueBright.bold("/$/          $|$|$$$$$$$       $/$/    |$|$$$$$|$|     $|$|   |$|       $$$$$  |$|   $ |$|$$$$$   $$$$$$///$/          $|$|     $/$/    |$||$|$$$$$"));
console.log(chalk.italic.cyanBright.bold("\n\t<#<#<#<#<WellCome TO Adventure Game>#>#>#>#>\t\n"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
        // let fuel = this.fuel + 25
        // this.fuel = fuel
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.italic.greenBright.bold("Please Enter Your Name?")
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: chalk.italic.blueBright.bold("Please Enter Your Select?"),
    choices: [
        chalk.italic.magentaBright.bold("Skeleton"),
        chalk.italic.cyanBright.bold("Assassin"),
        chalk.italic.redBright.bold("Zombie"),
    ]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == chalk.italic.magentaBright.bold("Skeleton")) {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: chalk.italic.yellowBright.bold("Please Enter Your Select?"),
            choices: [
                chalk.italic.redBright.bold("Attack"),
                chalk.italic.blueBright.bold("Drink Portion"),
                chalk.italic.magentaBright.bold("Run For Your Life"),
            ],
        });
        if (ans.opt == chalk.italic.redBright.bold("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose The Game"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"));
                    break;
                }
            }
        }
        if (ans.opt == chalk.italic.blueBright.bold("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ans.opt == chalk.italic.magentaBright.bold("Run For Your Life")) {
            console.log(chalk.red.bold.italic("You Loose Batter Luck Next Time"));
            break;
        }
    }
    if (opponent.select == chalk.italic.cyanBright.bold("Assassin")) {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: chalk.italic.yellowBright.bold("Please Enter Your Select?"),
            choices: [
                chalk.italic.redBright.bold("Attack"),
                chalk.italic.blueBright.bold("Drink Portion"),
                chalk.italic.magentaBright.bold("Run For Your Life"),
            ],
        });
        if (ans.opt == chalk.italic.redBright.bold("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose The Game"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"));
                    break;
                }
            }
        }
        if (ans.opt == chalk.italic.blueBright.bold("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ans.opt == chalk.italic.magentaBright.bold("Run For Your Life")) {
            console.log(chalk.red.bold.italic("You Loose Batter Luck Next Time"));
            break;
        }
    }
    if (opponent.select == chalk.italic.redBright.bold("Zombie")) {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: chalk.italic.yellowBright.bold("Please Enter Your Select?"),
            choices: [
                chalk.italic.redBright.bold("Attack"),
                chalk.italic.blueBright.bold("Drink Portion"),
                chalk.italic.magentaBright.bold("Run For Your Life"),
            ],
        });
        if (ans.opt == chalk.italic.redBright.bold("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose The Game"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"));
                    break;
                }
            }
        }
        if (ans.opt == chalk.italic.blueBright.bold("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ans.opt == chalk.italic.magentaBright.bold("Run For Your Life")) {
            console.log(chalk.red.bold.italic("You Loose Batter Luck Next Time"));
            break;
        }
    }
} while (true);
