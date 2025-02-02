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

import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsBoolean,
} from "class-validator";

import { SharerWhereUniqueInput } from "../../sharer/base/SharerWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ShareRecordCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  participatingCount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sharedWith?: string | null;

  @ApiProperty({
    required: false,
    type: () => SharerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SharerWhereUniqueInput)
  @IsOptional()
  @Field(() => SharerWhereUniqueInput, {
    nullable: true,
  })
  sharer?: SharerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  successfulShare?: boolean | null;
}

export { ShareRecordCreateInput as ShareRecordCreateInput };
