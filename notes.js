const chalk = require('chalk')
const fs = require('fs')

const removeNote = title => {
    const notes = loadNotes()

    const newarr = notes.filter( elem => elem.title !== title)

    if(newarr.length === notes.length) 
        console.log(chalk.red.inverse("No note found"))
    else{
        console.log(chalk.inverse.green("Note removed"))
        saveNotes(newarr)
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.find( elem => elem.title === title )

    if(!duplicateNotes) {
        notes.push({title, body})
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added'))
    }else
        console.log(chalk.inverse.red('Title already taken'))
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = title => {
    const notes = loadNotes()
    const new1 = notes.find(elem => elem.title === title)

    if (new1){
        console.log(chalk.inverse(new1.title))
        console.log(new1.body)
    } else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes:"))
    notes.forEach(elem => {
        console.log(elem.title,elem.body)
    });
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}