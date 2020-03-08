import StorageService from './StorageService';

const storageSerivce = new StorageService();

class ImportExportService {
    static async importJSON() {
        const json = {
            styles: await storageSerivce.getStyles(),
            matches: await storageSerivce.getMatches()
        };

        let settings = await upload();

        console.log('importing json', json, settings);
        return;
    }
    
    static async exportJSON() {
        const json = {
            styles: await storageSerivce.getStyles(),
            matches: await storageSerivce.getMatches()
        };

        console.log('exporting json', json);

        const jsonData = JSON.stringify(json);
        download(jsonData, 'TextEclipse.json', 'text/json');

        return;
    }
}

async function upload() {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        try {
            let i = document.createElement('input');
            i.type = 'file';
            i.name = "settingsFile";
            i.addEventListener('change', (event) => {
                console.log('file', event);
                resolve(event);
                reader.readAsText(event.target.file)
            });
            i.click();
            //i.remove();
        } catch(error) {
            reject(error);
        }
    });
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
    a.remove();
}

export default ImportExportService;