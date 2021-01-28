import { useCtryItemsState } from 'contexts/CtryItemsCont';
import { dateFormat } from 'javascript/dateFormat';
import React, { FC } from 'react';
import { Span } from 'style';

export const LastUpd: FC = () => {
  const ctryState = useCtryItemsState();
  return (
    <Span color="white" fontSize="15px">
      갱신일
      <br />
      {dateFormat(ctryState[0].LastUpdate)}
    </Span>
  );
};
