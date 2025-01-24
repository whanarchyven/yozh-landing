import { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import Dashed from '@@/public/images/block_asset_dashed.svg';
import DashedWhite from '@@/public/images/block_asset_dashed_white.svg';
import Filled from '@@/public/images/block_asset_filled.svg';
import clsx from 'clsx';

interface BlockWrapperInterface extends VariantProps<typeof cvaAsset> {}

const cvaAsset = cva([], {
  variants: {
    color: {
      yellow: 'fill-cYellow',
      white: 'fill-white',
      black: 'fill-black',
    },
  },
});
const BlockWrapper: FC<BlockWrapperInterface> = ({ color }) => {
  return (
    <div className={'w-full hidden lg:flex flex-col items-center'}>
      {color == 'yellow' ? (
        <Dashed className={clsx(' lg:-mb-64')} />
      ) : (
        <DashedWhite className={clsx(' lg:-mb-64')} />
      )}
      <Filled className={cvaAsset({ color })} />
    </div>
  );
};

export default BlockWrapper;
