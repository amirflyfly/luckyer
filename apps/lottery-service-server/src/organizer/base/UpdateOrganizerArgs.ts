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
import { OrganizerUpdateInput } from "./OrganizerUpdateInput";

@ArgsType()
class UpdateOrganizerArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereUniqueInput)
  @Field(() => OrganizerWhereUniqueInput, { nullable: false })
  where!: OrganizerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizerUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizerUpdateInput)
  @Field(() => OrganizerUpdateInput, { nullable: false })
  data!: OrganizerUpdateInput;
}

export { UpdateOrganizerArgs as UpdateOrganizerArgs };
