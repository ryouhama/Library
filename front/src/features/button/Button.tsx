import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
  disabled?: boolean
  onClick?: () => void
  color?: 'success' | 'error'
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

const CustomButton = styled(Button)({
});


export const StyledButton: React.FC<Props> = (props) => {
  const {
    disabled,
    onClick,
    color,
    size = 'small',
    startIcon,
    endIcon,
    children
  } = props

  return <CustomButton
    variant="contained"
    disabled={disabled}
    onClick={onClick}
    color={color ? color : undefined}
    size={size}
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {children}
  </CustomButton>;
};
