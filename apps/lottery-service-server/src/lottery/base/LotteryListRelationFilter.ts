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
import { LotteryWhereInput } from "./LotteryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LotteryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LotteryWhereInput,
  })
  @ValidateNested()
  @Type(() => LotteryWhereInput)
  @IsOptional()
  @Field(() => LotteryWhereInput, {
    nullable: true,
  })
  every?: LotteryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LotteryWhereInput,
  })
  @ValidateNested()
  @Type(() => LotteryWhereInput)
  @IsOptional()
  @Field(() => LotteryWhereInput, {
    nullable: true,
  })
  some?: LotteryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LotteryWhereInput,
  })
  @ValidateNested()
  @Type(() => LotteryWhereInput)
  @IsOptional()
  @Field(() => LotteryWhereInput, {
    nullable: true,
  })
  none?: LotteryWhereInput;
}
export { LotteryListRelationFilter as LotteryListRelationFilter };
