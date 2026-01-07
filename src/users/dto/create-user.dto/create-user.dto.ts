import { IsEmail, IsInt, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  @Max(100)
  @Min(1)
  @IsNotEmpty()
  id: number;

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

  // @IsNotEmpty()
  // @IsString()
  // mobile: string;
}
