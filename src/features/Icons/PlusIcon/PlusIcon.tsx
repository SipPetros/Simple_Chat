import React from 'react';
import { IconProps } from '../../InputContainer/types';

function PlusIcon({ width = '2em', height = '2em', style }: IconProps) {
  return (
    <svg
      style={{ cursor: 'pointer', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path
        fill="#5059f6"
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
      />
    </svg>
  );
}

export default PlusIcon;
