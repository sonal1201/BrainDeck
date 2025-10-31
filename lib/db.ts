import { PrismaClient} from "@prisma/client"

declare global {
    var prismaclient: PrismaClient | undefined
}


const db = globalThis.prismaclient || new PrismaClient ({
     log: [
        'query',
        'info',
        'warn',
        'error'
    ]
})

if(process.env.NODE_ENV == 'development'){
    globalThis.prismaclient = db
}

export default db