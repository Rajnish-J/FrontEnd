const cal = require('./Calculator')

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! The global object
// * V1

// ? node.js does'nt have window object, instead we use global

// let name = 'Rajnish'
// ? console.log(global.name);

// ? It throughs undefined, because the scope will be only the particular file that comes into the play of modules and modularity

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! Modules and modularity
// * V2

// ? If the files having two different files and having same variable names, it could be overrided to avoid this node.js maintains each and every code will be having particular modularity to those files it is known as modules..
// ? Modularity: code the set of codes in one file, and export use them in the various files after the import

// let check = cal.additon(11,7)

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! Introduction to Node modules => node modules explained

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! Child process Module

// ? 1. child process is a note rodule used to create sub process with in a script.
// ? 2. you can perform different tasks your with your script by using some methods.

const cp = require('child_process')

// cp.execSync('calc')
// * opens calculator

// cp.execSync('start chrome {link that opens in the chrome}')
// * opens google chrome with the link

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! OS Module => handles the OS related pograms
// ! use for the applicaiton downloading from the browser, to check the requirements, internally these mehods are run to check the requirements

const os = require('os');

// console.log(os.arch());
// * returns the operating bit

// console.log(os.platform());
// * returns the OS platform

// console.log(os.networkInterfaces());
// * returns the network information of the device

// console.log(os.cpus());
// * returns the complete specification of the CPU

// console.log(os.totalmem());
// * returns the total memory in the Device

// console.log(os.freemem());
// * returns the free memory in the device

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! Path module

// ! used for path level operations, fetching filename, path, directory path
// ? in node.js use the path files double slash (\\)

const path = require('path')

// let ext = path.extname('C:\\Users\\Lenovo\\OneDrive\\Desktop\\GIT\\FrontEnd\\Node - scaler\\section - 3\\notes.txt')
// console.log(ext);
// * fetches the extension of the exact path

// let basename = path.basename('C:\\Users\\Lenovo\\OneDrive\\Desktop\\GIT\\FrontEnd\\Node - scaler\\section - 3\\notes.txt')
// console.log(basename);
// * fetches the file name of the exact path

// console.log(__filename);
// * returns the complete path where the file exist with file name

// console.log(__dirname);
// * returns the complete path where the file exist

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! File Systems module

const fs = require('fs');

// ? Reading a file

// let fileContent = fs.readFileSync('test1.txt')
// console.log('file content: ' + fileContent);
// * reads the content in the files, it returns the buffer value, so concat with a text

// ? Writing in a file

// fs.writeFileSync('test1.txt', 'I updated the value..')
// console.log('file has been updated');
// * uodated a text in the file, all the old contents overrided and new value updated

// ? append a file

// fs.appendFileSync('test1.txt', 'file has been updated and append');
// console.log('file had appended');
// * append the file

// ? delete the file

// fs.unlinkSync('test2.txt')
// console.log('content deleted');
// * the file is deleted

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! File Systems with directory

// ? create a directory

// fs.mkdirSync('new_dir')
// console.log('new directory created');
// * creates the new directory(folder) in the existing path

// ? checking the contents in the directory

// let folderPath = 'C:\\Users\\Lenovo\\OneDrive\\Desktop\\GIT\\FrontEnd\\Node - scaler\\section - 3\\new_dir'
// let folderContent = fs.readdirSync(folderPath)
// console.log('folderContent: ' + folderContent);
// * reads the files in the path

// ? check whether the existing dir is exist or not

// let check = fs.existsSync('new_dir')
// console.log(check);
// * check the directory is present or not

// ? remove directory

// fs.rmdirSync('new_dir')
// console.log('deleted');
// * removes the directory, make sure it is an empty directory