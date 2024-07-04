/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizerWhereInput } from "./OrganizerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizerWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereInput)
  @IsOptional()
  @Field(() => OrganizerWhereInput, {
    nullable: true,
  })
  every?: OrganizerWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizerWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereInput)
  @IsOptional()
  @Field(() => OrganizerWhereInput, {
    nullable: true,
  })
  some?: OrganizerWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizerWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereInput)
  @IsOptional()
  @Field(() => OrganizerWhereInput, {
    nullable: true,
  })
  none?: OrganizerWhereInput;
}
export { OrganizerListRelationFilter as OrganizerListRelationFilter };
