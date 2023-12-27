import { Template } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { KeyDefinition } from './generate-runners';
import { text, image } from '@pdfme/schemas';
import fs from 'fs';
import { IMAGE_LOGO_DATA } from '../constants';

export function generateStartnummernPDF(runners: [{}], keys: KeyDefinition, path: string) {
    // TODO: Implement with Thomas vorlage
    let template: Template = {
        "schemas": [
            {
                "runner1": {
                    "type": "text",
                    "position": {
                        "x": 22,
                        "y": 13.3
                    },
                    "width": 165,
                    "height": 20.05,
                    "rotate": 0,
                    "alignment": "center",
                    "verticalAlignment": "middle",
                    "fontSize": 35,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "fontName": "Roboto"
                },
                "nummer1": {
                    "type": "text",
                    "position": {
                        "x": 22.31,
                        "y": 33.68
                    },
                    "width": 165.39,
                    "height": 72.97,
                    "rotate": 0,
                    "alignment": "center",
                    "verticalAlignment": "middle",
                    "fontSize": 200,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "#ffffff00",
                    "opacity": 1,
                    "fontName": "Roboto"
                },
                "image1": {
                    "type": "image",
                    "position": {
                        "x": 75.08,
                        "y": 107.64
                    },
                    "width": 134.98,
                    "height": 40,
                    "rotate": 0,
                    "opacity": 1
                },
                "runner2": {
                    "type": "text",
                    "position": {
                        "x": 22,
                        "y": 162.63
                    },
                    "width": 165,
                    "height": 20.05,
                    "rotate": 0,
                    "alignment": "center",
                    "verticalAlignment": "middle",
                    "fontSize": 35,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "fontName": "Roboto"
                },
                "nummer2": {
                    "type": "text",
                    "position": {
                        "x": 22.31,
                        "y": 183.01
                    },
                    "width": 165.39,
                    "height": 72.97,
                    "rotate": 0,
                    "alignment": "center",
                    "verticalAlignment": "middle",
                    "fontSize": 200,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "#ffffff00",
                    "opacity": 1,
                    "fontName": "Roboto"
                },
                "image2": {
                    "type": "image",
                    "position": {
                        "x": 74.97,
                        "y": 256.97
                    },
                    "width": 134.98,
                    "height": 40,
                    "rotate": 0,
                    "opacity": 1
                }
            }
        ],
        "basePdf": "data:application/pdf;base64,JVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovQ29udGVudHMgNCAwIFI+PgplbmRvYmoKNCAwIG9iago8PC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggNTA+PgpzdHJlYW0KeJwzUvDiMtAzNVco5zLUMzECUgZ6BgYKJkYGepamCrkKppamekYWMH6OQjAXAPYCCcsKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUiBdCi9Db3VudCAxCi9NZWRpYUJveCBbMCAwIDU5NS4yOCA4NDEuODldCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRm9udCA8PAo+PgovWE9iamVjdCA8PAo+Pgo+PgplbmRvYmoKNSAwIG9iago8PAovUHJvZHVjZXIgKFB5RlBERiAxLjcuMiBodHRwOi8vcHlmcGRmLmdvb2dsZWNvZGUuY29tLykKL0NyZWF0aW9uRGF0ZSAoRDoyMDIzMTIyNzIxMTc0NikKPj4KZW5kb2JqCjYgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCi9PcGVuQWN0aW9uIFszIDAgUiAvRml0SCBudWxsXQovUGFnZUxheW91dCAvT25lQ29sdW1uCj4+CmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyMDYgMDAwMDAgbiAKMDAwMDAwMDI5MyAwMDAwMCBuIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwODcgMDAwMDAgbiAKMDAwMDAwMDM4NyAwMDAwMCBuIAowMDAwMDAwNDk2IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNwovUm9vdCA2IDAgUgovSW5mbyA1IDAgUgo+PgpzdGFydHhyZWYKNTk5CiUlRU9GCg=="
    }
    
    runners.forEach((v, i) => {
        Object.keys(v).forEach(key => {
            if (key != keys.klasse && key != keys.name && key != "nummer") delete v[key]
        })
    })


    let newRunners = runners.reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentIndex % 2 == 0) {
            //@ts-ignore
            accumulator.push(array.slice(currentIndex, currentIndex + 2))
        }
        return accumulator
    }, [])
    //console.log(newRunners[1])

    //@ts-ignore
    let inputs = newRunners.map((runner, index) => {
        console.log(runner[0])
        let runner1 = runner[0][keys.name] + " " + runner[0][keys.klasse]
        let nummer1 = runner[0]["nummer"]
        let runner2 = ""
        let nummer2 = ""
        if (typeof runner[1] !== 'undefined') {

            runner2 = runner[1][keys.name] + " " + runner[1][keys.klasse]
            nummer2 = runner[1]["nummer"]
        }

        let image1 = IMAGE_LOGO_DATA
        let image2 = IMAGE_LOGO_DATA
        return {
            "runner1": runner1,
            "nummer1": nummer1,
            "image1": image1,
            "runner2": runner2,
            "nummer2": nummer2,
            "image2": image2,
        }
    })

    generate({ template, inputs, plugins: {
        text,
        image
    }}).then((pdf) => {
        fs.writeFileSync(path, pdf)
    })
}