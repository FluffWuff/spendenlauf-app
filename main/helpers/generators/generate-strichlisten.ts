import { KeyDefinition } from './generate-runners';
import { Workbook } from 'excel4node';
import { saveToExcel } from '../FileManagement';

export function generateStrichlisten(runners: [{}], keys: KeyDefinition, path: string) {
    runners.forEach((v, i) => {
        Object.keys(v).forEach(key => {
            if(key != keys.klasse && key != keys.name && key != "nummer") delete v[key]
        })
    })

    console.log(runners)
    saveToExcel(runners, path, "Strichlisten-Gesamt", ["Name", "Klasse", "Nummer", "Runden"])
}