import path from 'path'
import { app, ipcMain, shell } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import fs from 'fs'
import { generateRunners, KeyDefinition } from './helpers/generators/generate-runners';
import { KEYS_TO_DELETE } from './helpers/constants'
import { saveToExcel, saveToJson } from './helpers/FileManagement'
import { generateStartnummernPDF } from './helpers/generators/generate-startnummernpdf';
import { generateStrichlisten } from './helpers/generators/generate-strichlisten';

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
	serve({ directory: 'app' })
} else {
	app.setPath('userData', `${app.getPath('userData')} (development)`)
}

; (async () => {
	await app.whenReady()

	let pathToMainFile = ""
	let generalFilePath = ""
	let runners: [{}]
	let keyDefinition: KeyDefinition

	const mainWindow = createWindow('main', {
		width: 1000,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	})

	const jsonKeyDefinitionWindow = createWindow('keydefinition', {
		width: 600,
		height: 400,
		show: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	})


	if (isProd) {
		await mainWindow.loadURL('app://./home')
		await jsonKeyDefinitionWindow.loadURL('app://./jsonfile.html')
	} else {
		const port = process.argv[2]
		await mainWindow.loadURL(`http://localhost:${port}/home`)
		await jsonKeyDefinitionWindow.loadURL(`http://localhost:${port}/jsonfile`)
		mainWindow.webContents.openDevTools()
	}


	ipcMain.on('message', async (event, arg) => {
		event.reply('message', `${arg} World!`)
	})

	ipcMain.on("open-file-explorer", () => {
		shell.openPath(app.getAppPath())
	})

	ipcMain.on("show-jsonFileDefinition", (_, path) => {
		pathToMainFile = path
		console.log(path)
		jsonKeyDefinitionWindow.show()
	})

	ipcMain.on("generating-runners", (_, keys) => {
		let year = new Date().getFullYear()
		generalFilePath = app.getAppPath()+"/dateien-"+year
		if(!fs.existsSync(generalFilePath)) {
			fs.mkdirSync(generalFilePath)
		}
		jsonKeyDefinitionWindow.hide()
		keyDefinition = keys
		console.log(keys)
		const jsonFile = fs.readFileSync(pathToMainFile, 'utf-8')

		runners = generateRunners(jsonFile, keyDefinition, KEYS_TO_DELETE)
		saveToExcel(runners, generalFilePath+"/läufer.xlsx", "Läufer", Object.keys(keyDefinition))
		saveToJson(runners, generalFilePath+"/läufer.json")
	})

	ipcMain.on("generate-document", (_, fileType) => {
		switch (fileType) {
			case "startnummern":
				generateStartnummernPDF(runners, keyDefinition, generalFilePath+"/startnummernPDF.pdf")
				break
			case "strichlisten":
				generateStrichlisten(runners, keyDefinition, generalFilePath+"/strichlisten.xlsx")
				break
			case "anwesenheit":
				break
		}
	})

})()

app.on('window-all-closed', () => {
	app.quit()
})
