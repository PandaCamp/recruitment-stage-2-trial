import React from 'react'
interface IProps extends React.SVGProps<SVGSVGElement> {}
const SvgComponent = (props: IProps) => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path
      d="M512 102.4c-226.227 0-409.6 183.373-409.6 409.6S285.773 921.6 512 921.6 921.6 738.227 921.6 512 738.227 102.4 512 102.4zm175.642 532.147a37.555 37.555 0 0 1-53.095 53.095L512 565.094 389.453 687.642a37.555 37.555 0 1 1-53.095-53.095L458.906 512 336.358 389.453a37.53 37.53 0 1 1 53.095-53.095L512 458.906l122.547-122.548a37.555 37.555 0 0 1 53.095 53.095L565.094 512l122.548 122.547z"
      fill="#BFBFBF"
    />
  </svg>
)
export default SvgComponent
