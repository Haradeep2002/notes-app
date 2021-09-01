const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'tells what the note is about',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title:{
            demandOption:true,
            type:'string',
            describe: 'to help remove specified title'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'To list all notes',
    handler(){ 
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'To read a note',
    builder: {
        title:{
            describe: 'specify title whose body is to be known',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();










