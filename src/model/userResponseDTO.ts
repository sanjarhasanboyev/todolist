import { Decimal } from "@prisma/client/runtime/library"

export type UserResponseDTO = {
    id: Number,
    originalId: Number,
    name: string,
    surname: string,
    email: string,
    salary: Decimal,
    dateString: String
}