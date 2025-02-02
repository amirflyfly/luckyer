/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizerWhereUniqueInput } from "./OrganizerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class OrganizerFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereUniqueInput)
  @Field(() => OrganizerWhereUniqueInput, { nullable: false })
  where!: OrganizerWhereUniqueInput;
}

export { OrganizerFindUniqueArgs as OrganizerFindUniqueArgs };
