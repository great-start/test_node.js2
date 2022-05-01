import {v4 as uuidv4} from 'uuid';
import path from 'path';

class FileService {
    async saveFile(file) {
        const fileName = uuidv4() + path.extname(file.name);
        const picturePath = path.resolve('pictures', fileName);
        // const picturePath = path.join(process.cwd(), '/pictures', fileName);


        await file.mv(picturePath, (err) => {
            // if (err) {
            //     return res.status(500).send(err.message);
            // }
            console.log('File uploaded!');
        });

        return picturePath;
    }
}

export const fileService = new FileService();