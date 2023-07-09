import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: "The user's email",
  })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
