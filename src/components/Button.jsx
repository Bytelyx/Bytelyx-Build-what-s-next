import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none tracking-tight';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] text-white shadow-sm hover:shadow-lg hover:shadow-[#3027D9]/25 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#3027D9]',
    secondary: 'bg-[#F6F7FC] text-[#08085B] hover:bg-[#E7E9F2] hover:-translate-y-0.5 active:translate-y-0 border border-[#E7E9F2] focus:ring-[#3027D9]',
    outline: 'bg-transparent text-[#08085B] border border-[#08085B]/20 hover:border-[#3027D9] hover:bg-[#3027D9]/5 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#3027D9]',
    ghost: 'bg-transparent text-[#667085] hover:text-[#08085B] hover:bg-[#F6F7FC] focus:ring-[#3027D9]'
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClass}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClass}`} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={`group ${combinedClass}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}
