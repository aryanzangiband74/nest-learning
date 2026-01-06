import { IsEmail, IsInt, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateUserDto {
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  email: string;
}
