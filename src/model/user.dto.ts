import { Decimal } from "@prisma/client/runtime/library"

export type User = {
    name: string,
    surname: string,
    email: string,
    salary: Decimal
    date: Date
}