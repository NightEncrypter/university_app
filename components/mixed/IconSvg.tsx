import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSvg = ({
  styles,
  height,
}: {
  styles?: {
    width?: number | string;
    height?: number | string;
    marginBottom?: number | string;
    color?: string;
  };
  height?: number;
}) => {
  return (
    <Svg style={{...styles}} viewBox="0 0 245 204" height={height}>
      <Path
        fill={'white'}
        d="M122.5 102L31.115 64.005L36.75 204H12.25L18.13 58.5225L0 51L122.5 0L245 51L122.5 102ZM122.5 38.25C115.762 38.25 110.25 41.055 110.25 44.625C110.25 48.195 115.762 51 122.5 51C129.237 51 134.75 48.195 134.75 44.625C134.75 41.055 129.237 38.25 122.5 38.25ZM122.5 114.75L190.732 86.3175C199.43 98.3025 205.433 112.71 207.393 128.392C203.718 127.882 199.92 127.5 196 127.5C164.762 127.5 137.445 144.968 122.5 170.978C114.914 157.727 104.152 146.754 91.2683 139.133C78.3843 131.511 63.8195 127.503 49 127.5C45.08 127.5 41.2825 127.882 37.6075 128.392C39.5675 112.71 45.57 98.3025 54.2675 86.3175L122.5 114.75Z"
        fill-opacity="0.86"
      />
    </Svg>
  );
};

export default IconSvg;
