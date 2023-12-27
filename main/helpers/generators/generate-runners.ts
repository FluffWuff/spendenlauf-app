import { NUMBER_SELECTION, KLASSE_SELECTION } from '../constants';
import { Workbook } from 'excel4node';

export function generateRunners(jsonString: string, keys: KeyDefinition, keysToDelete: string[]) {
    console.log(jsonString)
    let jsonObject = JSON.parse(jsonString)
    let runners = jsonObject[0]
    //Remove unncessary attributes
    runners.forEach((v, i) => {
        keysToDelete.forEach((k, j) => {
            delete v[k]
        })
    })

    //Sortierung nach Klasse, Name
    runners.sort((a, b) => (a[keys.klasse] as string).localeCompare(b[keys.klasse]) || (a[keys.name] as string).split(" ")[1].localeCompare((b[keys.name] as string).split(" ")[1]))

    //Generierung der Nummern
    let classCount = 0
    let currentClass = ""
    for (let i = 0; i < runners.length; i++) {
        let runner = runners[i]
        if (currentClass == "" || currentClass != runner[keys.klasse]) { //neue klasse
            classCount = 0
            currentClass = runner[keys.klasse]
        }
        let nummer = 0
        let numbSelect = NUMBER_SELECTION[currentClass.replace(/\D/g, "")] 
        if(typeof numbSelect === 'number') nummer += numbSelect
        nummer += KLASSE_SELECTION[currentClass.replace(/\d/g, "")]
        nummer += classCount
        runner["nummer"] = ""+nummer
        runner["runden"] = 0

        classCount++
    }

    return runners
}



export interface KeyDefinition {
    name: string,
    klasse: string,
    firstSpenderName: string,
    firstSpenderBetrag: string,

    secondSpenderName: string,
    secondSpenderBetrag: string,

    thirdSpenderName: string,
    thirdSpenderBetrag: string,

    fourthSpenderName: string,
    fourthSpenderBetrag: string,

    fifthSpenderName: string,
    fifthSpenderBetrag: string,
}

type Runner = {
    name: string,
    klasse: string,
    runden: number,
    nummer: number,

    firstSpenderName: string,
    firstSpenderBetrag: number,

    secondSpenderName: string,
    secondSpenderBetrag: number,

    thirdSpenderName: string,
    thirdSpenderBetrag: number,

    fourthSpenderName: string,
    fourthSpenderBetrag: number,
}