import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({
    children, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    isLoading = false,
    iconOnly = false,
    leftIcon = null,
    rightIcon = null,
    ariaLabel,
    className = '',
    ...props
}) => {

    // Generate dynamic class string
    const buttonClasses = [
    styles.btn,
    styles[variant],
    styles[size],
    iconOnly ? styles.iconOnly : '',
    isLoading ? styles.loading : '',
    className
  ].join(' ').trim();


    return ( 

        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || isLoading}
            aria-label={iconOnly ? ariaLabel : undefined}
            {...props}
    >
            {isLoading && <div className={styles.spinner} />}
      
            {!isLoading && (
              <>
                {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

                {/* If iconOnly is true, children should be the icon */}
                {children}
                {rightIcon && !iconOnly && <span className={styles.icon}>{rightIcon}</span>}
              </>
            )}
        </button>
     );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  iconOnly: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  ariaLabel: PropTypes.string, // Required if iconOnly is used
  className: PropTypes.string,
};
 
export default Button;