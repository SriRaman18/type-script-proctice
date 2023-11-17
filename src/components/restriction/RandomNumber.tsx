import React from "react";
type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNagative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNagative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isNagative: never;
  isPositive?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({
  value,
  isPositive,
  isNagative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "positive"}
      {isNagative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
