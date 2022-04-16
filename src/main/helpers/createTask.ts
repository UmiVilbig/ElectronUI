/* eslint-disable prettier/prettier */
import fs from 'fs'
import path from 'path';

export default function saveTask(payload: object, fileName: string){
    fs.writeFile(path.join(__dirname, `../data/levels/${fileName}.json`), JSON.stringify(payload), function(err) {
        if(err) {
            console.log(err)
        }
    })
}