import React from 'react';
import {ClipPath, Defs, Path, Rect, Svg, G} from 'react-native-svg';



interface Props {
  width?: number;
  height?: number;
  color?: string;
  onPress?: () => void;
}
export const ScanIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.954 4H6.04601C4.89736 4 4 4.89543 4 6.03896V17.961C4 19.1046 4.89736 20 6.04601 20H17.954C19.1026 20 20 19.1046 20 17.961V6.03896C20 4.89543 19.1026 4 17.954 4ZM6.04601 5.99994H17.954C18.1552 5.99994 18.3137 6.15845 18.3137 6.35968V8.2866H15.3813V6.35968C15.3813 6.15845 15.5398 5.99994 15.741 5.99994H17.954C18.1552 5.99994 18.3137 6.15845 18.3137 6.35968V17.6403C18.3137 17.8415 18.1552 17.9999 17.954 17.9999H15.741C15.5398 17.9999 15.3813 17.8415 15.3813 17.6403V10.7134H8.61869V17.6403C8.61869 17.8415 8.46018 17.9999 8.25895 17.9999H6.04601C5.84478 17.9999 5.68628 17.8415 5.68628 17.6403V6.35968C5.68628 6.15845 5.84478 5.99994 6.04601 5.99994ZM9.83019 8.2866V6.35968C9.83019 6.15845 9.98869 5.99994 10.1899 5.99994H13.8101C14.0113 5.99994 14.1698 6.15845 14.1698 6.35968V8.2866H9.83019Z"
        fill={color}
      />
      <Path
        d="M12 13.2872C12.3648 13.2872 12.6667 13.5851 12.6667 13.9499V17.5906C12.6667 17.9554 12.3648 18.2533 12 18.2533C11.6352 18.2533 11.3333 17.9554 11.3333 17.5906V13.9499C11.3333 13.5851 11.6352 13.2872 12 13.2872Z"
        fill={color}
      />
      <Path
        d="M13.279 12H17.6667C18.0315 12 18.3333 12.2988 18.3333 12.6636C18.3333 13.0284 18.0315 13.3272 17.6667 13.3272H13.279C12.9142 13.3272 12.6123 13.0284 12.6123 12.6636C12.6123 12.2988 12.9142 12 13.279 12Z"
        fill={color}
      />
      <Path
        d="M12.0002 17.5905C12.0002 17.9553 11.6983 18.2533 11.3335 18.2533C10.9687 18.2533 10.6668 17.9553 10.6668 17.5905V13.9498C10.6668 13.585 10.9687 13.2871 11.3335 13.2871C11.6983 13.2871 12.0002 13.585 12.0002 13.9498V17.5905Z"
        fill={color}
      />
      <Path
        d="M13.279 12H17.6667C18.0315 12 18.3333 12.2988 18.3333 12.6636C18.3333 13.0284 18.0315 13.3272 17.6667 13.3272H13.279C12.9142 13.3272 12.6123 13.0284 12.6123 12.6636C12.6123 12.2988 12.9142 12 13.279 12Z"
        fill={color}
      />
    </Svg>
  );
};

export const ArrowRightIcon = ({
  width = 20,
  height = 20,
  color = '#ffffff',
  onPress,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2.91602 10H16.941"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AddIcon = ({
  width = 20,
  height = 20,
  color = '#F20831',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        opacity="0.4"
        d="M5 10H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowForwardIcon = ({
  width = 20,
  height = 20,
  color = '#F20831',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.42578 16.5999L12.8591 11.1666C13.5008 10.5249 13.5008 9.4749 12.8591 8.83324L7.42578 3.3999"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MailIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#F20831',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const PhoneIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#F20831',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 9C22 5.13 18.87 2 15 2"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CircleIcon = ({width = 20, height = 20, color = '#9CA3AF'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.58268 17.5C13.9549 17.5 17.4993 13.9555 17.4993 9.58329C17.4993 5.21104 13.9549 1.66663 9.58268 1.66663C5.21043 1.66663 1.66602 5.21104 1.66602 9.58329C1.66602 13.9555 5.21043 17.5 9.58268 17.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3327 18.3333L16.666 16.6666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const CheckVerify = ({width = 20, height = 20, color = '#9CA3AF'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 51"
      fill="none"
      //xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M24.9993 46.3333C36.4577 46.3333 45.8327 36.9583 45.8327 25.5C45.8327 14.0416 36.4577 4.66663 24.9993 4.66663C13.541 4.66663 4.16602 14.0416 4.16602 25.5C4.16602 36.9583 13.541 46.3333 24.9993 46.3333Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M16.1465 25.5L22.0423 31.3958L33.8548 19.6041"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const BackSpaceIcon = ({onPress, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      onPress={onPress}>
      <Path
        opacity="0.4"
        d="M10.9477 20.5H17.6677C20.4277 20.5 22.6677 18.26 22.6677 15.5V9C22.6677 6.24 20.4277 4 17.6677 4H10.9477C9.53766 4 8.19766 4.59 7.24766 5.64L3.71766 9.52C2.30766 11.07 2.30766 13.43 3.71766 14.98L7.24766 18.86C8.19766 19.91 9.53766 20.5 10.9477 20.5Z"
        fill="#6B7280"
      />
      <Path
        d="M15.258 12.25L17.198 10.31C17.488 10.02 17.488 9.53997 17.198 9.24997C16.908 8.95997 16.428 8.95997 16.138 9.24997L14.198 11.19L12.258 9.24997C11.968 8.95997 11.488 8.95997 11.198 9.24997C10.908 9.53997 10.908 10.02 11.198 10.31L13.138 12.25L11.198 14.19C10.908 14.48 10.908 14.96 11.198 15.25C11.348 15.4 11.538 15.47 11.728 15.47C11.918 15.47 12.108 15.4 12.258 15.25L14.198 13.31L16.138 15.25C16.288 15.4 16.478 15.47 16.668 15.47C16.858 15.47 17.048 15.4 17.198 15.25C17.488 14.96 17.488 14.48 17.198 14.19L15.258 12.25Z"
        fill="#6B7280"
      />
    </Svg>
  );
};
export const NigeriaFlag = ({width = 24, height = 24}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath id="clip0_3185_559">
          <Rect y={0.5} width={21} height={15} rx={29} fill="white" />
        </ClipPath>
      </Defs>
      <Rect y={0.5} width={21} height={15} rx={29} fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5H7V15.5H0V0.5ZM14 0.5H21V15.5H14V0.5Z"
        fill="#0A6A30"
      />
    </Svg>
  );
};

export const ArrowBackwardIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeLineIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (

    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <Path
        d="M12.1092 7.8916L7.89258 12.1083C7.35091 11.5666 7.01758 10.8249 7.01758 9.99993C7.01758 8.34993 8.35091 7.0166 10.0009 7.0166C10.8259 7.0166 11.5676 7.34994 12.1092 7.8916Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8499 4.8084C13.3915 3.7084 11.7249 3.1084 9.99987 3.1084C7.0582 3.1084 4.31654 4.84173 2.4082 7.84173C1.6582 9.01673 1.6582 10.9917 2.4082 12.1667C3.06654 13.2001 3.8332 14.0917 4.66654 14.8084"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.01758 16.2751C7.96758 16.6751 8.97591 16.8917 10.0009 16.8917C12.9426 16.8917 15.6842 15.1584 17.5926 12.1584C18.3426 10.9834 18.3426 9.0084 17.5926 7.8334C17.3176 7.40006 17.0176 6.99173 16.7092 6.6084"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.9242 10.5833C12.7076 11.7583 11.7492 12.7166 10.5742 12.9333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.89102 12.1084L1.66602 18.3334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3324 1.66675L12.1074 7.89175"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ForgotPasswordIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        opacity="0.4"
        d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
        stroke="#F20831"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195"
        stroke="#F20831"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2V22"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.0941 12H11.1031"
        stroke="#EF4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.09412 12H7.1031"
        stroke="#EF4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        opacity="0.4"
        d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon = ({width = 24, height = 24, color = '#F20831'}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
        fill={color}
      />
    </Svg>
  );
};

export const DiscoverIcon = ({width = 24, height = 24, color = '#9CA3AF'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M17.8011 2.1L7.87107 4.59C6.42107 4.95 4.95107 6.42 4.59107 7.87L2.10107 17.8C1.35107 20.8 3.19107 22.65 6.20107 21.9L16.1311 19.42C17.5711 19.06 19.0511 17.58 19.4111 16.14L21.9011 6.2C22.6511 3.2 20.8011 1.35 17.8011 2.1Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SettingsIcon = ({width=24, height=24, color="#9CA3AF"}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      >
      <Path
        opacity="0.34"
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export const NotifictionIcon = ({width=24, height=24, color="#6B7280"}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      >
      <Path
        opacity="0.4"
        d="M12 6.43994V9.76994"
        stroke={color}
        stroke-width="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M12.0189 2C8.33892 2 5.35892 4.98 5.35892 8.66V10.76C5.35892 11.44 5.07892 12.46 4.72892 13.04L3.45892 15.16C2.67892 16.47 3.21892 17.93 4.65892 18.41C9.43892 20 14.6089 20 19.3889 18.41C20.7389 17.96 21.3189 16.38 20.5889 15.16L19.3189 13.04C18.9689 12.46 18.6889 11.43 18.6889 10.76V8.66C18.6789 5 15.6789 2 12.0189 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M15.3319 18.8201C15.3319 20.6501 13.8319 22.1501 12.0019 22.1501C11.0919 22.1501 10.2519 21.7701 9.65187 21.1701C9.05187 20.5701 8.67188 19.7301 8.67188 18.8201"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
}

export const CopyIcon = ({width = 12, height = 12, color = '#9CA3AF'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M8 6.45V8.55C8 10.3 7.3 11 5.55 11H3.45C1.7 11 1 10.3 1 8.55V6.45C1 4.7 1.7 4 3.45 4H5.55C7.3 4 8 4.7 8 6.45Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11 3.45V5.55C11 7.3 10.3 8 8.55 8H8V6.45C8 4.7 7.3 4 5.55 4H4V3.45C4 1.7 4.7 1 6.45 1H8.55C10.3 1 11 1.7 11 3.45Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const WalletIcon = ({width = 20, height = 20, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <Path
        opacity="0.4"
        d="M10.832 9.29175H5.83203"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1.66797 9.2917V5.4417C1.66797 3.7417 3.04297 2.3667 4.74297 2.3667H9.4263C11.1263 2.3667 12.5013 3.42503 12.5013 5.12503"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.568 10.1667C14.1513 10.5667 13.9513 11.1833 14.118 11.8166C14.3263 12.5916 15.093 13.0833 15.893 13.0833H16.668V14.2917C16.668 16.1333 15.1763 17.625 13.3346 17.625H5.0013C3.15964 17.625 1.66797 16.1333 1.66797 14.2917V8.45833C1.66797 6.61667 3.15964 5.125 5.0013 5.125H13.3346C15.168 5.125 16.668 6.625 16.668 8.45833V9.66663H15.768C15.3013 9.66663 14.8763 9.84999 14.568 10.1667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3329 10.5168V12.2334C18.3329 12.7001 17.9495 13.0834 17.4745 13.0834H15.8662C14.9662 13.0834 14.1412 12.4251 14.0662 11.5251C14.0162 11.0001 14.2162 10.5084 14.5662 10.1668C14.8745 9.85011 15.2995 9.66675 15.7662 9.66675H17.4745C17.9495 9.66675 18.3329 10.0501 18.3329 10.5168Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowDownIcon = ({width = 16, height = 16, color = '#9CA3AF'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      >
      <Path
        opacity="0.4"
        d="M10.3218 8.82004L7.79512 5.45337H4.05512C3.41512 5.45337 3.09512 6.2267 3.54845 6.68004L7.00179 10.1334C7.55512 10.6867 8.45512 10.6867 9.00845 10.1334L10.3218 8.82004Z"
        fill={color}
      />
      <Path
        d="M10.3736 8.05896L8.79336 5.95337H11.9463C12.1394 5.95337 12.2402 6.18875 12.1044 6.32815L10.3736 8.05896Z"
        fill={color}
        stroke={color}
      />
    </Svg>
  );
};

export const ArrowFrontIcon = ({
  width = 16,
  height = 16,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        opacity="0.4"
        d="M8.81979 5.67993L5.45312 8.2066V11.9466C5.45312 12.5866 6.22646 12.9066 6.67979 12.4533L10.1331 8.99993C10.6865 8.4466 10.6865 7.5466 10.1331 6.99326L8.81979 5.67993Z"
        fill={color}
      />
      <Path
        d="M5.45312 4.05328V8.20662L8.81979 5.67995L6.67979 3.53995C6.22646 3.09328 5.45312 3.41328 5.45312 4.05328Z"
        fill={color}
      />
    </Svg>
  );
};

export const PayIcon = ({width = 20, height = 20, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <G opacity="0.4">
        <Path
          d="M10.832 9.16658L17.6654 2.33325"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.332 5.66675V1.66675H14.332"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9.16797 1.66675H7.5013C3.33464 1.66675 1.66797 3.33341 1.66797 7.50008V12.5001C1.66797 16.6667 3.33464 18.3334 7.5013 18.3334H12.5013C16.668 18.3334 18.3346 16.6667 18.3346 12.5001V10.8334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RecieveIcon = ({width = 20, height = 20, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <G opacity="0.4">
        <Path
          d="M18.3333 1.66675L11.5 8.50008"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.832 5.1416V9.1666H14.857"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9.16797 1.66675H7.5013C3.33464 1.66675 1.66797 3.33341 1.66797 7.50008V12.5001C1.66797 16.6667 3.33464 18.3334 7.5013 18.3334H12.5013C16.668 18.3334 18.3346 16.6667 18.3346 12.5001V10.8334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};