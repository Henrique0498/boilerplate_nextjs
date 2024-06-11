interface InTitle extends React.ComponentPropsWithRef<'h1'> {}

const Title = ({ children, ...props }: InTitle) => {
  return <h1 {...props}>{children}</h1>
}
export default Title
