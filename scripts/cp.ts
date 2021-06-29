import fs from 'fs'
import ErrnoException = NodeJS.ErrnoException

const SOURCE: string = 'configs/config.example.ts'
const DESTINATION: string = 'configs/config.ts'
fs.copyFile(SOURCE, DESTINATION, (error: ErrnoException | null) => {
    if (error)
        throw error
})