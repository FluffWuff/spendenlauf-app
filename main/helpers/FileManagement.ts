import { Workbook } from 'excel4node';
import fs from 'fs';

export function saveToExcel(whatToSave: [{}], path: string, worksheetName: string, keys?: string[]) {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet(worksheetName)

    if(keys !== undefined) {
        keys.forEach((v, i) => {
            console.log(v)
            worksheet.cell(1, i+1).string(v)
        })
    }

    whatToSave.forEach((element, rowIndex) => {
        Object.values(element).forEach((value, columnIndex) => {
            let cell = worksheet.cell(rowIndex+2, columnIndex+1)
            if(typeof value === 'string') cell.string(value)
            else if (typeof value === 'number') cell.number(value)
        })  
    })

    workbook.write(path)
}

export function saveToJson(json: any, path: string) {
    fs.writeFileSync(path, JSON.stringify(json))
}

export function readFromJson(path: string) {
    let jsonString = fs.readFileSync(path, 'utf-8')
    return JSON.parse(jsonString)
}