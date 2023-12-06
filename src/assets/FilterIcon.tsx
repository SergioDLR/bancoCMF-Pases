interface Props {
  size?: number
  color?: string
}

const FilterIcon = ({ size = 20, color = 'black' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833344 4.94792C0.833344 4.48768 1.20644 4.11458 1.66668 4.11458H15C15.4602 4.11458 15.8333 4.48768 15.8333 4.94792C15.8333 5.40815 15.4602 5.78125 15 5.78125H1.66668C1.20644 5.78125 0.833344 5.40815 0.833344 4.94792Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 4.16667C16.2064 4.16667 15.8333 4.53976 15.8333 5C15.8333 5.46024 16.2064 5.83333 16.6667 5.83333C17.1269 5.83333 17.5 5.46024 17.5 5C17.5 4.53976 17.1269 4.16667 16.6667 4.16667ZM14.1667 5C14.1667 3.61929 15.286 2.5 16.6667 2.5C18.0474 2.5 19.1667 3.61929 19.1667 5C19.1667 6.38071 18.0474 7.5 16.6667 7.5C15.286 7.5 14.1667 6.38071 14.1667 5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16668 9.94792C4.16668 9.48768 4.53977 9.11458 5.00001 9.11458H18.3333C18.7936 9.11458 19.1667 9.48768 19.1667 9.94792C19.1667 10.4082 18.7936 10.7812 18.3333 10.7812H5.00001C4.53977 10.7812 4.16668 10.4082 4.16668 9.94792Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33334 9.16667C2.87311 9.16667 2.50001 9.53976 2.50001 10C2.50001 10.4602 2.87311 10.8333 3.33334 10.8333C3.79358 10.8333 4.16668 10.4602 4.16668 10C4.16668 9.53976 3.79358 9.16667 3.33334 9.16667ZM0.833344 10C0.833344 8.61929 1.95263 7.5 3.33334 7.5C4.71405 7.5 5.83334 8.61929 5.83334 10C5.83334 11.3807 4.71405 12.5 3.33334 12.5C1.95263 12.5 0.833344 11.3807 0.833344 10Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833344 14.9479C0.833344 14.4877 1.20644 14.1146 1.66668 14.1146H15C15.4602 14.1146 15.8333 14.4877 15.8333 14.9479C15.8333 15.4082 15.4602 15.7812 15 15.7812H1.66668C1.20644 15.7812 0.833344 15.4082 0.833344 14.9479Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 14.1667C16.2064 14.1667 15.8333 14.5398 15.8333 15C15.8333 15.4602 16.2064 15.8333 16.6667 15.8333C17.1269 15.8333 17.5 15.4602 17.5 15C17.5 14.5398 17.1269 14.1667 16.6667 14.1667ZM14.1667 15C14.1667 13.6193 15.286 12.5 16.6667 12.5C18.0474 12.5 19.1667 13.6193 19.1667 15C19.1667 16.3807 18.0474 17.5 16.6667 17.5C15.286 17.5 14.1667 16.3807 14.1667 15Z"
        fill={color}
      />
    </svg>
  )
}

export default FilterIcon
