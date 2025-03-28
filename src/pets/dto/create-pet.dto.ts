import { IsDateString, IsString } from "class-validator";

export class CreatePetDto {
 
    @IsString()
    name: string;
    
    @IsString()
    dono: string;

    @IsString()
    telefone: string;

    @IsString()
    animal: string;

    @IsString()
    raca: string;

    @IsDateString()
    dateOfBirth: string;

}
