import { cp, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

const publicDir = path.join(root, 'public')
await mkdir(publicDir, { recursive: true })

await cp(path.join(root, 'index.html'), path.join(publicDir, 'index.html'))
await cp(path.join(root, 'dist'), path.join(publicDir, 'dist'), { recursive: true })